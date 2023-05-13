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
};

async function createFighter(data) {
    console.log("createFighter2", data);
    return await fetchWrapper.post(`${baseUrl}/createFighter`, data);
}

async function getAll() {
    return await fetchWrapper.get(baseUrl);
}

async function getById(id) {
    return await fetchWrapper.get(`${baseUrl}/${id}`);
}

async function update(id, params) {
    console.log("update", id, params);
    await fetchWrapper.put(`${baseUrl}/${id}`, params);

    // update stored fighter if the logged in fighter updated their own record
    // if (id === fighterSubject.value.id) {
    //     // update local storage
    //     const fighter = { ...fighterSubject.value, ...params };
    //     localStorage.setItem("fighter", JSON.stringify(fighter));

    //     // publish updated fighter to subscribers
    //     fighterSubject.next(fighter);
    // }
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id) {
    await fetchWrapper.delete(`${baseUrl}/${id}`);
}

async function uploadPhoto(fighterid, file) {
    const formData = new FormData();
    formData.append("photo", file);

    await fetchWrapper.put(`${baseUrl}/uploadPhoto/${fighterid}`, formData, {
        headers: {
            // Remove the 'Content-Type' header to allow the browser to set it with the correct boundary
            "Content-Type": "",
        },
    });
}