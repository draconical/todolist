import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:3030/api'
});

export const tasksAPI = {
    getTasks: () => {
        return instance.get('/data')
            .then(response => {
                return response.data
            })
    },
    addTask: (newTaskText) => {
        return instance.post('/createtask', { text: newTaskText }).then((response) => {
            return response;
        })
    },
    deleteTask: (id) => {
        return instance.delete('/deletetask', { id: id }).then((response) => {
            return response;
        })
    },
    updateTask: (id, text) => {
        return instance.put('/updatetask', { id: id, text: text }).then((response) => {
            return response;
        })
    },
    toggleIsDone: (id) => {
        return instance.put('/isdone', { id: id }).then((response) => {
            return response;
        })
    }
}