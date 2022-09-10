import {renderOrderItems} from "./utils.js"
import { getOrderItems } from "./order.js"


const orderItems = await getOrderItems()
await renderOrderItems(orderItems)



