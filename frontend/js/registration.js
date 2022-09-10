import { signupAPI } from "./apis.js"
import { getJsonHeaders } from "./headers_utils.js"


const registrationFormNode = document.querySelector('.registration-form')
const usernameNode = registrationFormNode.querySelector('.registration-form-username')
const userPasswordNode = registrationFormNode.querySelector('.registration-form-password')
const userPasswordRepeatNode = registrationFormNode.querySelector('.registration-form-password-repeat')


async function handleRegistrationForm(event) {
    event.preventDefault()

    let username = usernameNode.value
    let password = userPasswordNode.value
    let password2 = userPasswordRepeatNode.value

    if (username && password && password2) {
        let userRegistrationDataForm = {
            'username': username,
            'password': password,
            'password2': password2
        }
        console.log(userRegistrationDataForm)
        await sendRegistrationFormToServer(userRegistrationDataForm)

    }
    usernameNode.value = ''
    userPasswordNode.value = ''
    userPasswordRepeatNode.value = ''
}


async function sendRegistrationFormToServer(userRegistrationDataForm) {
    const headers = getJsonHeaders()
    try {
        const response = await fetch(signupAPI, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(userRegistrationDataForm)
        })
        const responseJson = await response.json()
        alert('Registered. Please go one page back')
    } catch (error) {
        console.log(error)
    } 
}


registrationFormNode.addEventListener('submit', handleRegistrationForm)
