import axios from "axios";

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

const API = {
    getToDo() {
        return instance.get('/todos?_limit=20')
    },
    createToDo(newToDo) {
        return instance.post('/todos', newToDo);
    },
    deleteToDo(id) {
        return instance.delete(`/todos/${id}`)
    }
}

export default API