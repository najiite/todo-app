import { writable } from "svelte/store";

export const todos = writable([])

export const addTodo =(text)=>{
    const newTodos = { text, completed: false, id: Date.now()}
    todos.update( (cur) => { 
        return [newTodos, ...cur]
    })
}

export const deleteTodo =(id)=>{
    todos.update(todos => todos.filter(todos => todos.id != id))
}

export const toggleCompleted =(id)=>{
    todos.update( todos => {
        let index = -1
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                index = i
                break
            }
            
        }
        if (index !== -1) {
            todos[index].completed = !todos[index].completed  
        }
        return todos
    })
}