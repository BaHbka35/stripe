

export function setTokenToLocalStorage(token){
    localStorage.setItem('token', token)
}


export function getToken() {
    return localStorage.getItem('token')
}


export function setSignatureToLocalStorage(signature){
    localStorage.setItem('signature', signature)
}


export function getSignature() {
    return localStorage.getItem('signature')
}