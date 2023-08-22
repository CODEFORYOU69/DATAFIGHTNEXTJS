import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";

import { fetchWrapper } from "helpers";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/fighters`;
const fighterSubject = new BehaviorSubject(
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("fighter"))
);

export const fighterService = {
    fighter: fighterSubject.asObservable(),
    get fighterValue() {
        return fighterSubject.value;
    },
    createFighter,
    getAll,
    getById,
    update,
    uploadPhoto,
    delete: _delete,
    fightersFilter,
};

async function createFighter(data) {
    data.createdBy = JSON.parse(localStorage.getItem('user')).id;
    return await fetchWrapper.post(`${baseUrl}/createFighter`, data);
}

async function getAll() {
    return await fetchWrapper.get(baseUrl);
}

async function getById(id) {
    
    return await fetchWrapper.get(`${baseUrl}/${id}`);
}

async function update(id, params) {
    params.createdBy = JSON.parse(localStorage.getItem('user')).id;

    console.log("update", id, params);
    await fetchWrapper.put(`${baseUrl}/${id}`, params);

 
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id) {
    await fetchWrapper.delete(`${baseUrl}/${id}`);
}

async function uploadPhoto(fighterId, formData) {
    return await fetchWrapper.putFormData(`/api/fighters/uploadPhoto?fighterId=${fighterId}`, formData);
}


async function fightersFilter(params) {

    console.log('paramsservice', params)
    const queryString = Object.entries(params)
        .filter(([_, value]) => value !== '') // Ignore les entrées vides
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
    console.log('query string', queryString)
    const url = `${baseUrl}/fightersFilter?${queryString}`;
    return await fetchWrapper.get(url);
}