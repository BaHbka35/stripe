import { setSignatureToLocalStorage, setTokenToLocalStorage } from "./tokens_and_signatures.js";
import { setUserToLocalStorage } from "./users.js"
import { loginAPI } from "./apis.js"


const loginFormNode = document.querySelector('.login-form')
const usernameNode = loginFormNode.querySelector('.login-form-username')
const userPasswordNode = loginFormNode.querySelector('.login-form-password')


async function handleLoginForm(event) {
    event.preventDefault()

    let username = usernameNode.value
    let password = userPasswordNode.value

    if (username && password) {
        let userLoginDataForm = {
            'username': username,
            'password': password
        }
        await sendLoginFormToServer(userLoginDataForm)
    }
    usernameNode.value = ''
    userPasswordNode.value = ''
}


async function sendLoginFormToServer(userLoginDataForm) {
    try {
        const response = await fetch(loginAPI, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userLoginDataForm)
        })
        const responseJson = await response.json()

        if (response.status >= 400){
            alert(JSON.stringify(responseJson))
            return
        } 

        alert('loged in')

        setTokenToLocalStorage(responseJson.token)
        setSignatureToLocalStorage(responseJson.signature)
        setUserToLocalStorage(responseJson.user)

    } catch (error) {
        console.log(error)
    } 
}


loginFormNode.addEventListener('submit', handleLoginForm)
