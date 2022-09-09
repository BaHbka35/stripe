const registrationFormNode = document.querySelector('.registration-form')
const usernameNode = registrationFormNode.querySelector('.registration-form-username')
const userPasswordNode = registrationFormNode.querySelector('.registration-form-password')


async function handleRegistrationForm(event) {
    event.preventDefault()

    let username = usernameNode.value
    let password = userPasswordNode.value

    if (username & password) {
        let userRegistrationDataForm = {
            'username': usernameNode.value,
            'password': userPasswordNode.value
        }
        console.log(userRegistrationDataForm)
        await sendRegistrationFormToServer(userRegistrationDataForm)

    }
    usernameNode.value = ''
    userPasswordNode.value = ''
}


async function sendRegistrationFormToServer(userRegistrationDataForm) {
    url = 'http://0.0.0.0:8000/users/signup/'
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(userRegistrationDataForm)
        })
        const responseJson = await response.json()
        console.log(responseJson)
    } catch (error) {
        console.log(error)
    } 
}


registrationFormNode.addEventListener('submit', handleRegistrationForm)
