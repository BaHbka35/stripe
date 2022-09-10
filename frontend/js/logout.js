import { deleteUserFromLocalStoragee } from "./users.js"
import { render } from "./utils.js"
import { logoutAPI } from "./apis.js"
import { getAuthHeaders } from "./headers_utils.js"


export async function sendLogoutReguest(){
    const headers = getAuthHeaders()
    try {
        const response = await fetch(logoutAPI, {
            method: 'GET',
            headers: headers,
        })
        const responseJson = await response.json()
        deleteUserFromLocalStoragee()
        render()
    } catch (error) {
        console.log(error)
    } 
}

