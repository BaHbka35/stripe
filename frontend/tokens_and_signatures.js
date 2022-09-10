

export function setTokenToLocalStorage(token){
    localStorage.setItem('toke', token)
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