const registrationFormNode = document.querySelector('.registration-form')
const usernameNode = registrationFormNode.querySelector('.registration-form-username')
const userPasswordNode = registrationFormNode.querySelector('.registration-form-password')
const userPasswordRepeatNode = registrationFormNode.querySelector('.registration-form-password-repeat')


async function handleRegistrationForm(event) {
    event.preventDefault()

    let username = usernameNode.value
    let password = userPasswordNode.value
    let password2 = userPasswordRepeatNode.value

    if (username & password & password2) {
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
    url = 'http://0.0.0.0:8000/users/signup/'
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRegistrationDataForm)
        })
        const responseJson = await response.json()
        console.log(responseJson)
    } catch (error) {
        console.log(error)
    } 
}


registrationFormNode.addEventListener('submit', handleRegistrationForm)
