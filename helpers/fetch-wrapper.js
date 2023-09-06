    import getConfig from 'next/config'

    import { userService } from 'services'

    const { publicRuntimeConfig } = getConfig()

    export const fetchWrapper = {
        get: request('GET'),
        post: request('POST'),
        put: request('PUT'),
        delete: request('DELETE'),
        putFormData: request('PUT', true),
    }

    function request(method, isFormData = false) {
        return async (url, body) => {
            const headers = authHeader(url);
            if (isFormData) {
                // Si c'est FormData, supprimez l'en-tête 'Content-Type'
                delete headers['Content-Type'];
            } else if (body && !isFormData) {
                headers['Content-Type'] = 'application/json';
                body = JSON.stringify(body);
            }

            const requestOptions = {
                method,
                headers,
                body
            };

            const response = await fetch(url, requestOptions);
            return handleResponse(response);
        }
    }


    // helper functions

    function authHeader(url) {
        // return auth header with jwt if user is logged in and request is to the api url

        if (url.includes('resetpassword') || url.includes('forgotPassword')) {
            return {
                'Content-Type': 'application/json',
                
            }
        }
        const user = userService.userValue
        const isLoggedIn = user?.token
        const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl)
        if (isLoggedIn && isApiUrl) {
            return { Authorization: `Bearer ${user.token}` }
        } else {
            return {}
        }
    }


    async function handleResponse(response) {


        const isJson = response.headers
            ?.get('content-type')
            ?.includes('application/json')
        const data = isJson ? await response.json() : null


        // check for error response
        if (!response.ok) {
            if ([401, 403].includes(response.status) && userService.userValue) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                userService.logout()
            }

            // get error message from body or default to response status
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }

        return data
    }
