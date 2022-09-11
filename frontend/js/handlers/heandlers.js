import { addItemToOrder } from "../items.js"


let itemsNode = document.querySelector('.items-list')
let orderHeaderNode = document.querySelector('.order')


itemsNode.addEventListener(
    'click', (event) => {
        if (event.target.tagName != 'BUTTON'){
            return
        }
        const item_id = event.target.id
        addItemToOrder(item_id)

        const spanNode = orderHeaderNode.querySelector("span")
        spanNode.innerHTML = Number(spanNode.innerHTML) + 1
    }
)