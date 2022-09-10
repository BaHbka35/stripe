import { sendLoginFormToServer } from '../login.js'


const loginFormNode = document.querySelector('.login-form')
const usernameLoginNode = loginFormNode.querySelector('.login-form-username')
const userPasswordLoginNode = loginFormNode.querySelector('.login-form-password')


async function handleLoginForm(event) {
    event.preventDefault()

    let username = usernameLoginNode.value
    let password = userPasswordLoginNode.value

    if (username && password) {
        let userLoginDataForm = {
            'username': username,
            'password': password
        }
        await sendLoginFormToServer(userLoginDataForm)
    }
    usernameLoginNode.value = ''
    userPasswordLoginNode.value = ''
}


loginFormNode.addEventListener('submit', handleLoginForm)