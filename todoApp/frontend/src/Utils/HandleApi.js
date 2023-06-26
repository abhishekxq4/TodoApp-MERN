import axios from 'axios';

const baseUrl = 'http://localhost:8090'

const getAllTodo = (setTodo) => {
    axios.get(baseUrl)
    .then(({data}) => {
        // console.log(data)
        setTodo(data)
    })
    .catch((error) => {
        console.log("some error occured while fetching data..", error)
    })
    
}

const addTodo = (text, setText, setTodo) => {
     
    axios.post(`${baseUrl}/save`, {text})
    .then((data) => {
        // console.log(data)
        setText("")
        getAllTodo(setTodo)
    })
    .catch((error) => {
        console.log(error)
    })
}

const updateTodo = (todoId, text, setTodo, setText, setIsUpdating) => {
     console.log(todoId, text, setIsUpdating)
    axios.post(`${baseUrl}/update`, {_id: todoId, text})
    .then((data) => {
        console.log(data)
        setText("")
        setIsUpdating(false)
        getAllTodo(setTodo)
    })
    .catch((error) => {
        console.log(error)
    })
}

const deleteTodo = (_id, setTodo,) => {
     
    axios.post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        getAllTodo(setTodo)
    })
    .catch((error) => {
        console.log(error)
    })
}


export {getAllTodo, addTodo, updateTodo, deleteTodo};