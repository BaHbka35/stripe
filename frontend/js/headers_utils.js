import { getToken, getSignature } from "./tokens_and_signatures.js";


export function getJsonHeaders(){
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}


export function getAuthHeaders(headers){
    const token = getToken()
    const signature = getSignature() 
    return {
        "token": token,
        "signature": signature
    }
}



