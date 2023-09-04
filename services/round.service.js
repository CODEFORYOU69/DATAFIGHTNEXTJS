import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/rounds`;
const roundSubject = new BehaviorSubject(
    typeof window !== 'undefined' && JSON.parse(localStorage.getItem('round'))
);

export const roundService = {
    round: roundSubject.asObservable(),
    get roundValue() {
        return fightSubject.value;
    },
    createRound,
    getAll,
    getById,
    update,
    getRoundCountByFightId,
    delete: _delete,
};

async function createRound(data) {
    data.createdBy = JSON.parse(localStorage.getItem('user')).id;
    return await fetchWrapper.post(`${baseUrl}/createRound`, data);
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
    if (id === roundSubject.value.id) {
        // update local storage
        const fight = { ...roundSubject.value, ...params };
        localStorage.setItem('round', JSON.stringify(round));

        // publish updated fight to subscribers
        fightSubject.next(round);
    }
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id) {
    await fetchWrapper.delete(`${baseUrl}/${id}`);
}

async function getRoundCountByFightId(id) {
    return await fetchWrapper.get(`${baseUrl}/getRoundCountByFightId/${id}`);
}
