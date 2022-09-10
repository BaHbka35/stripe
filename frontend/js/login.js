import { setSignatureToLocalStorage, setTokenToLocalStorage } from "./tokens_and_signatures.js";
import { setUserToLocalStorage } from "./users.js"
import { loginAPI } from "./apis.js"
import { getJsonHeaders } from "./headers_utils.js"


export async function sendLoginFormToServer(userLoginDataForm) {
    const headers = getJsonHeaders()
    try {
        const response = await fetch(loginAPI, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(userLoginDataForm)
        })
        const responseJson = await response.json()

        if (response.status >= 400){
            alert(JSON.stringify(responseJson))
            return
        } 

        alert('loged in. Please go one page back')

        setTokenToLocalStorage(responseJson.token)
        setSignatureToLocalStorage(responseJson.signature)
        setUserToLocalStorage(responseJson.user)

    } catch (error) {
        console.log(error)
    } 
}


