import { getAuthHeaders } from "./headers_utils.js"
import { buyOrderAPI } from './apis.js'


export async function buyOrder(){
    const headers = getAuthHeaders()
    try {
        const response = await fetch(buyOrderAPI, {
            'method': 'GET',
            headers: headers
        })
        const responseJson = await response.json()
        return responseJson.id
    } catch (error) {
        console.log(error)
        throw error
    }
}

