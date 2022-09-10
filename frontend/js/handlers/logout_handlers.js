import { sendLogoutReguest } from "../logout.js"


let logoutNode = document.querySelector('.header-logout')


async function handeLogout(event){
    event.preventDefault()
    await sendLogoutReguest()
}


logoutNode.addEventListener('click', handeLogout)