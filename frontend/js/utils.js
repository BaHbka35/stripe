import { getUserFromLocalStorage} from "./users.js";


let registrationNode = document.querySelector('.header-registration')
let loginNode = document.querySelector('.header-login')
let usernameNode = document.querySelector('.header-username')
let logoutNode = document.querySelector('.header-logout')


export function render(){
    let user = getUserFromLocalStorage()
    if (user) {
        registrationNode.classList.add('disable')
        loginNode.classList.add('disable')
        logoutNode.classList.remove('disable')
        usernameNode.classList.remove('disable')
        usernameNode.innerHTML = user.username
    } else {
        usernameNode.classList.add('disable')
        logoutNode.classList.add('disable')
        registrationNode.classList.remove('disable')
        loginNode.classList.remove('disable')
    }
}