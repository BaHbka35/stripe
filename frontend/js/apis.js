

const domen = 'http://127.0.0.1:8000/'

const users = domen + 'users/'
const shop = domen + 'shop/'

export const loginAPI = users + 'login/'
export const signupAPI = users + 'signup/'
export const logoutAPI = users + 'logout/'

export const getItemsAPI = shop + 'get_items/'
export const addItemToOrderAPI = shop + 'add_item_to_order/'