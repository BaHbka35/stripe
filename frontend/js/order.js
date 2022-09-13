import { getOrderAPI } from "./apis.js"
import { getAuthHeaders} from "./headers_utils.js"


export async function getOrderItems(){
    const headers = getAuthHeaders()
    try {
        const response = await fetch(getOrderAPI, {
            method: 'GET',
            headers: headers,
        })
        const responseJson = await response.json()
        return responseJson.items
    } catch (error) {
        console.log(error)
    } 
}
