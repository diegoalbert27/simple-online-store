import { get, post } from "./services"
import Storage from "./storage"

const accountUrl = '/user'
const token = Storage.get('token')

export async function createUser(newUser) {
    try {
        const response = await post(`${accountUrl}/`, newUser)

        Storage.set('user', response.data.data.user)
        Storage.set('token', response.data.data.token)

        return response
    } catch (err) {
        throw(err)
    }
}

export async function login(access) {
    try {
        const response = await post(`${accountUrl}/login`, access)

        Storage.set('user', response.data.data.user)
        Storage.set('token', response.data.data.token)

        return response
    } catch(err) {
        throw(err)
    }
}

export async function logoutUser() {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const response = await get(`${accountUrl}/logout`, config)

        Storage.remove('user')
        Storage.remove('token')

        return response
    } catch(err) {
        throw(err)
    }
}
