import {render} from "./utils.js"
import { getItems } from "./items.js"


let itemsNode = document.querySelector('.items-list')


render()

async function render_items(){
    const items = await getItems()

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

render_items()




