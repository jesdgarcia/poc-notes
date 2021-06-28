import axios from 'axios'
const baseUrl = 'http://localhost:7000/notes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async content => {
    const response = await axios.post(baseUrl, content)
    return response.data
}

const update = async (id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject)
    return response.data
}

const remove = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
}

const service = { getAll, create, update, remove }

export default service