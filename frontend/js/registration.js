import { signupAPI } from "./apis.js"
import { getJsonHeaders } from "./headers_utils.js"


export async function sendRegistrationFormToServer(userRegistrationDataForm) {
    const headers = getJsonHeaders()
    try {
        const response = await fetch(signupAPI, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(userRegistrationDataForm)
        })
        const responseJson = await response.json()
        if (response.status == 201) {
            alert('Registered. Please go one page back')
        } else {
            alert(JSON.stringify(responseJson))
            return
        }
    } catch (error) {
        console.log(error)
    } 
}


