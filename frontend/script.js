let registrationNode = document.querySelector('.header-registration')
let loginNode = document.querySelector('.header-login')
let usernameNode = document.querySelector('.header-username')
console.log(registrationNode)
console.log(usernameNode)


function getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem('user'))
}


function setUserToLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user))
}


function deleteUserFromLocalStoragee() {
    localStorage.removeItem('user')
}


let user = getUserFromLocalStorage()


if (user) {
    registrationNode.classList.add('disable')
    loginNode.classList.add('disable')
    usernameNode.classList.remove('disable')
    usernameNode.innerHTML = user.username
} else {
    usernameNode.classList.add('disable')
    registrationNode.classList.remove('disable')
    loginNode.classList.remove('disable')
}






