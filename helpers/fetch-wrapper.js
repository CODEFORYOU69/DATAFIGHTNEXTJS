import getConfig from 'next/config'

import { userService } from 'services'

const { publicRuntimeConfig } = getConfig()

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE'),
}

function request(method) {
    console.log('method', method)
    return async (url, body) => {
        console.log('url', url)
        console.log('body', body)
        const requestOptions = {
            method,
            headers: authHeader(url),
        }
        console.log('requestOptions', requestOptions)
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json'
            requestOptions.body = JSON.stringify(body)
        }
        const response = await fetch(url, requestOptions)
        console.log('responseoko', response)
        return handleResponse(response)
    }
}

// helper functions

function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const user = userService.userValue
    console.log('user', user)
    const isLoggedIn = user?.token
    console.log('isLoggedIn', isLoggedIn)
    const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl)
    console.log('isApiUrl', isApiUrl)
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.token}` }
    } else {
        return {}
    }
}


async function handleResponse(response) {
    console.log("Raw response:", response);


    const isJson = response.headers
        ?.get('content-type')
        ?.includes('application/json')
    const data = isJson ? await response.json() : null
    console.log('data2', data)
    console.log('response', response)
    console.log('isJson', isJson)

    // check for error response
    if (!response.ok) {
        if ([401, 403].includes(response.status) && userService.userValue) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            userService.logout()
        }

        // get error message from body or default to response status
        const error = (data && data.message) || response.statusText
        console.log('errornjnj', error)
        // eslint-disable-next-line no-undef
        return Promise.reject(error)
    }

    return data
}
