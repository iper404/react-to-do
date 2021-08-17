//type in 'rfc' for react basics shortcut. like '!' for html

import React from 'react'
import Todo from './Todo'

export default function TodoList({todos}) {
    return (
        // <div>
            // {/* {todos.length}  */}
            // {/* Wrap in curly braces means JavaScript code */}
            // {/* map over array, return elements of todos
            // within Todo.js component */}
        // </div>

        todos.map(todo=>{
            return <Todo key={todo} todo={todo} />
            // Assign a unique key to every todo
            // so that React doesn't re-render
            // every single todo, only the changed ones is what we want
        })
    )
}
