import { getUserFromLocalStorage} from "./users.js";
import { getItems } from "./items.js"
import { getOrderItems } from "./order.js"


let registrationNode = document.querySelector('.header-registration')
let loginNode = document.querySelector('.header-login')
let usernameNode = document.querySelector('.header-username')
let logoutNode = document.querySelector('.header-logout')
let itemsNode = document.querySelector('.items-list')


export async function render(){
    let user = getUserFromLocalStorage()
    if (user) {
        registrationNode.classList.add('disable')
        loginNode.classList.add('disable')
        logoutNode.classList.remove('disable')
        usernameNode.classList.remove('disable')
        usernameNode.innerHTML = user.username

        const items = await getItems()
        await renderItems(items)

        console.log(await getOrderItems())

    } else {
        usernameNode.classList.add('disable')
        logoutNode.classList.add('disable')
        itemsNode.innerHTML = ''
        registrationNode.classList.remove('disable')
        loginNode.classList.remove('disable')
    }
}


export async function renderItems(items){

    for (const item of items){
        const id = item.id
        const name = item.name
        const description = item.description
        const price = item.price
        console.log(item.name)
        const listElem = `
            <li class="items-list-elem">
                <p>name: ${name}</p>
                <p>description: ${description}</p>
                <p>price: ${price}</p>
                <button class="button-add-to-order" id=${id}>add to order</button>
            </li>
        `
        itemsNode.innerHTML += listElem
        
    }
}