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
    filterFights
};

async function createFight(data) {
    // add user id from local storage to fight object
     data.createdBy = JSON.parse(localStorage.getItem('user')).id;

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

}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id) {
    await fetchWrapper.delete(`${baseUrl}/${id}`);
}

async function filterFights(params) {
    const queryString = Object.entries(params)
        .filter(([_, value]) => value !== '') // Ignore les entrées vides
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
    const url = `${baseUrl}/filterFights?${queryString}`;
    return await fetchWrapper.get(url);
}
