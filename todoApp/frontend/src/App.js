import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoSuccess,
  removeTodoSuccess,
  updateTodoSuccess,
  getAllTodoSuccess
} from "./Redux/createSlice";
import { addTodo, updateTodo, deleteTodo, getAllTodo } from "./Utils/HandleApi";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");


  const fetchTodos = () => {
    getAllTodo()
      .then((data) => {
        dispatch(getAllTodoSuccess(data));
      })
      .catch((error) => {
        console.log("Error fetching todos: ", error);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  

  const handleAddTodo = () => {
    if (isUpdating) {
      updateTodo(todoId, text)
        .then(() => {
          dispatch(updateTodoSuccess({ id: todoId, text: text }));
          setIsUpdating(false);
          setText("");
        })
        .catch((error) => {
          console.log("Error updating todo: ", error);
        });
    } else {
      addTodo(text)
        .then((data) => {
          dispatch(addTodoSuccess(data));
          setText("");
        })
        .catch((error) => {
          console.log("Error adding todo: ", error);
        });
    }
  };

  const handleDeleteTodo = (_id) => {
    deleteTodo(_id)
      .then(() => {
        dispatch(removeTodoSuccess(_id));
      })
      .catch((error) => {
        console.log("Error deleting todo: ", error);
      });
  };

  const handleUpdateModeTodo = (text, _id) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="input">
          <input
            type="text"
            placeholder="Add todos"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="add" onClick={handleAddTodo}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {todos.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateModeTodo={() => handleUpdateModeTodo(item.text, item._id)}
              deleteTodo={() => handleDeleteTodo(item._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;