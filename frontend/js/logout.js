import { getToken, getSignature } from "./tokens_and_signatures.js";
import { deleteUserFromLocalStoragee } from "./users.js"
import { render } from "./utils.js"
import { logoutAPI } from "./apis.js"


let logoutNode = document.querySelector('.header-logout')


async function handeLogout(event){
    event.preventDefault()
    await sendLogoutReguest()
}


async function sendLogoutReguest(){
    const token = getToken()
    const signature = getSignature() 

    try {
        const response = await fetch(logoutAPI, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Token': token,
                'Signature': signature
            },
        })
        const responseJson = await response.json()
        deleteUserFromLocalStoragee()
        render()
    } catch (error) {
        console.log(error)
    } 
}


logoutNode.addEventListener('click', handeLogout)