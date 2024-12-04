import {createContext, useContext} from "react"

export const todoContext= createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed: false,
        }
    ],

    addTodo: (todo)=>{},
    updatedTodo:(id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete:(id)=>{},
});

export const useTodo=()=>{
    return useContext(todoContext)
}

export const TodoProvider=todoContext.Provider