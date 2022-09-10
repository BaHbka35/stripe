import { sendRegistrationFormToServer } from '../registration.js'


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


registrationFormNode.addEventListener('submit', handleRegistrationForm)