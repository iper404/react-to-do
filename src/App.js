import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';
//uuid is a random number generator -- used to set random id's for new todos

/*
  React manages state in our app
  when state changes, it rerenders things for us
  Store all To Dos in our State so we can render them
  and every time we change, re-render the whole component tree.

  useRef allows us to handle elements in our HTML input
*/

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState([]) 
  //pass in objects into useState
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

    return (
      <> 
        {/* //create a component fragment with <> </> 
        It's a way to get around only being able to return one thing which
        would be <TodoList/>*/}
        <TodoList todos={todos} toggleTodo={toggleTodo} />{/*jsx*/} 
        {/* "todos" = prop */}
        {/* //TodoList.js has the code for our component */}
        {/* HTML */}
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Clear Complete</button>
        <div>{todos.filter(todo => !todo.complete).length} left to do</div>
        {/* End HTML */}
      </>
    )
}

export default App;
