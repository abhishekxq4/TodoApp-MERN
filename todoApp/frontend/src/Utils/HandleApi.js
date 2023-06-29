import axios from 'axios';

const baseUrl = 'http://localhost:8090';

const getAllTodo = () => {
  return axios.get(baseUrl)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log("Some error occurred while fetching data:", error);
      throw error;
    });
};

const addTodo = (text) => {
  return axios.post(`${baseUrl}/save`, { text })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log("Error adding todo:", error);
      throw error;
    });
};

const updateTodo = (todoId, text) => {
  return axios.post(`${baseUrl}/update`, { _id: todoId, text })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log("Error updating todo:", error);
      throw error;
    });
};

const deleteTodo = (_id) => {
  return axios.post(`${baseUrl}/delete`, { _id })
    .then(() => {
      // No need to return data here
    })
    .catch((error) => {
      console.log("Error deleting todo:", error);
      throw error;
    });
};

export { getAllTodo, addTodo, updateTodo, deleteTodo }