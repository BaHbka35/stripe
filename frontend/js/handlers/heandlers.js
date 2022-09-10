import { addItemToOrder } from "../items.js"


let itemsNode = document.querySelector('.items-list')


itemsNode.addEventListener(
    'click', (event) => {
        if (event.target.tagName != 'BUTTON'){
            return
        }
        const item_id = event.target.id
        addItemToOrder(item_id)

    }
)

