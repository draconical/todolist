const express = require('express');
const { request, response } = require('express');
const app = express();
const port = 3030;
const cors = require('cors');
const bodyParser = require('body-parser')

let data = [
    {
        "id": 1,
        "isDone": false,
        "text": "Lorem ipsum dolor sit amet."
    },
    {
        "id": 2,
        "isDone": true,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        "id": 3,
        "isDone": false,
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nihil!"
    },
    {
        "id": 4,
        "isDone": false,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, laboriosam eos necessitatibus."
    },
    {
        "id": 5,
        "isDone": false,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, laboriosam!"
    },
    {
        "id": 6,
        "isDone": false,
        "text": "Lorem ipsum dolor sit amet consectetur."
    }
]

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('Hello from Express server!')
})

app.get('/api/data', (request, response) => {
    response.send(data)
})

app.post('/api/createtask', (request, response) => {
    response.send('creating new task...')
    data.push({id: data.length > 0 ? data[data.length - 1].id + 1 : data.length + 1, text: request.body.text})
})

app.delete('/api/deletetask', (request, response) => {
    response.send('deleting this task...')
    data.splice(request.body.id, 1)
})

app.put('/api/updatetask', (request, response) => {
    response.send('updating this task...')
    data.map((task) => {
        if (task.id === request.body.id) {
            return task.text = request.body.text
        }
    })
})

app.put('/api/isdone', (request, response) => {
    response.send('toggling this task...')
    data.map((task) => {
        if (task.id === request.body.id) {
            if (task.isDone === true) {
                return task.isDone = false
            } else {
                return task.isDone = true
            }
        }
    })
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened: ', err)
    }
    console.log(`server is listening on ${port}`)
})