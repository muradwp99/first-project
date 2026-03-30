import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id: 1,
        text: "Learn Redux Toolkit",
        completed: false
    }]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) =>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)

        },
        updateTodo: (state, action) =>{
            const {id, text} = action.payload
            const existingTodo = state.todos.find(todo => todo.id === id)
            if(existingTodo){
                existingTodo.text = text
            }

        },
        toggleTodo: (state, action) =>{
            const existingTodo = state.todos.find(todo => todo.id === action.payload)
            if(existingTodo){
                existingTodo.completed = !existingTodo.completed
            }
        }
        
    }
})

export const {addTodo, removeTodo, updateTodo, toggleTodo} = todoSlice.actions

export default todoSlice.reducer;