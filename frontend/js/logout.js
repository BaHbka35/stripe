import { deleteUserFromLocalStoragee } from "./users.js"
import { render } from "./utils.js"
import { logoutAPI } from "./apis.js"
import { getJsonHeaders, getAuthHeaders } from "./headers_utils.js"


let logoutNode = document.querySelector('.header-logout')


async function handeLogout(event){
    event.preventDefault()
    await sendLogoutReguest()
}


async function sendLogoutReguest(){
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


logoutNode.addEventListener('click', handeLogout)