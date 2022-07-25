import { writable } from "svelte/store";
import { supabase } from "../lib/supabaseClient"
import { user } from './auth'

export const todos = writable([])

export const loadsTodos = async () =>{
    const {data,error} = await supabase.from('todos').select()
    

    if (error) {
        console.log(error)
    }
    todos.set(data)
}

export const addTodo = async (text,user_id)=>{
    const {data,error} = await supabase.from('todos').insert({text, user_id})

    if (error) {
        console.log(error)
    }
    todos.update( (cur) => { 
        return [...cur, data[0]]
    })
}

export const deleteTodo = async (id)=>{
    const {data,error} = await supabase.from('todos').delete().match({id})

    if (error) {
        console.log(error)
    }
    todos.update(todos => todos.filter(todos => todos.id != id))
}
export const toggleCompleted = async (id, currentState)=>{
    const {data,error} = await supabase.from('todos').update({completed: !currentState}).match({id})

    if (error) {
        console.log(error)
    }

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