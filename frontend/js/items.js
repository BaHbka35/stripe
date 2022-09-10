import { getItemsAPI } from "./apis.js"
import { getAuthHeaders } from "./headers_utils.js"


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

