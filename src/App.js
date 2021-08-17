import React, {useState, useRef} from 'react';
import TodoList from './TodoList'

/*
  React manages state in our app
  when state changes, it rerenders things for us
  Store all To Dos in our State so we can render them
  and every time we change, re-render the whole component tree.

  useRef allows us to handle elements in our HTML input
*/

function App() {
  const [todos, setTodos] = useState([]) 
  //pass in objects into useState

  function handleAddTodo(e){

  }

    return (
      <> 
        {/* //create a component fragment with <> </> 
        It's a way to get around only being able to return one thing which
        would be <TodoList/>*/}
        <TodoList todos={todos}/> {/*jsx*/} 
        {/* "todos" = prop */}
        {/* //TodoList.js has the code for our component */}
        {/* HTML */}
        <input ref={todoNameRef} type="text" />
        <button onclick={handleAddTodo}>Add To-Do</button>
        <button>Clear Complete</button>
        <div>0 Left To Do</div>
        {/* End HTML */}
      </>
    )
}

export default App;
