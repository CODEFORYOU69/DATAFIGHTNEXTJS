import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import { fetchWrapper } from 'helpers';



const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/fights`;
const fightSubject = new BehaviorSubject(
    typeof window !== 'undefined' && JSON.parse(localStorage.getItem('fight'))
);


export const fightService = {
    fight: fightSubject.asObservable(),
    get fightValue() {
        return fightSubject.value;
    },
    createFight,
    getAll,
    getById,
    update,
    delete: _delete,
};

async function createFight(data) {
    console.log('data fight service', data)
    return await fetchWrapper.post(`${baseUrl}/createFight`, data);
}

async function getAll() {
    return await fetchWrapper.get(baseUrl);
}

async function getById(id) {
    return await fetchWrapper.get(`${baseUrl}/${id}`);
}

async function update(id, params) {
    await fetchWrapper.put(`${baseUrl}/${id}`, params);

    // update stored fight if the logged in fight updated their own record
    if (id === fightSubject.value.id) {
        // update local storage
        const fight = { ...fightSubject.value, ...params };
        localStorage.setItem('fight', JSON.stringify(fight));

        // publish updated fight to subscribers
        fightSubject.next(fight);
    }
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id) {
    await fetchWrapper.delete(`${baseUrl}/${id}`);
}

