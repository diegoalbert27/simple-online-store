import axios from "axios";

const base_url = '/api'
const config = {}

async function get(endpoint, config = {}) {
    try {
        const response = await axios.get(`${base_url}${endpoint}`, config)
        return response
    } catch(err) {
        throw(err)
    }
}

async function post(endpoint, data) {
    try {
        const response = await axios.post(`${base_url}${endpoint}`, data, config)
        return response
    } catch(err) {
        throw(err)
    }
}

async function put(endpoint, data) {
    try {
        const response = await axios.put(`${base_url}${endpoint}`, data, config)
        return response
    } catch(err) {
        throw(err)
    }
}

async function remove(endpoint) {
    try {
        const response = await axios.delete(`${base_url}${endpoint}`, config)
        return response
    } catch(err) {
        throw(err)
    }
}

export { get, post, put, remove }
