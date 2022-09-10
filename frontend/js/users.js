

export function getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem('user'))
}


export function setUserToLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user))
}


export function deleteUserFromLocalStoragee() {
    localStorage.removeItem('user')
}