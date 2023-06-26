import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { addTodo, deleteTodo, getAllTodo, updateTodo } from "./Utils/HandleApi";


function App() {

  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllTodo(setTodo)
  }, []);

  const updateModeTodo = (text, _id) => {
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className='input'>

          <input
            type='text'
            placeholder='Add todos'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div 
            className='add'
            onClick={isUpdating ? 
               () => updateTodo(todoId, text, setTodo, setText, setIsUpdating) 
               : () => addTodo(text, setText, setTodo)}>
            {isUpdating ? 'Update' : 'Add'}
          </div>

        </div>

        <div className="list">
          {todo.map((item) => (
            <Todo 
            key={item._id} 
            text={item.text} 
            updateModeTodo={() => updateModeTodo(item.text, item._id)}
            deleteTodo={() => deleteTodo(item._id, setTodo)}/>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
