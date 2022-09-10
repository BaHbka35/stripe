import { getItemsAPI, addItemToOrderAPI } from "./apis.js"
import { getAuthHeaders, getJsonHeaders } from "./headers_utils.js"


export async function getItems(){
    const headers = getAuthHeaders()
    try {
        const response = await fetch(getItemsAPI, {
            method: 'GET',
            headers: headers,
        })
        const responseJson = await response.json()
        return responseJson
    } catch (error) {
        console.log(error)
    } 
}


export async function addItemToOrder(item_id){
    const auth_headers = getAuthHeaders()
    const jsonHeaders = getJsonHeaders()
    const headers = Object.assign({}, auth_headers, jsonHeaders)
    try {
        const addItemToOrderForm = {"item_id": item_id}
        const response = await fetch(addItemToOrderAPI, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(addItemToOrderForm)
        })

        const responseJson = await response.json()

        if (200 <= response.status && response.status < 300){
            alert('was added')
        }
    } catch (error) {
        console.log(error)
    } 

}


