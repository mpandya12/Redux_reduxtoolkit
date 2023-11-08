import {createSlice, nanoid} from "@reduxjs/toolkit"



const initalstate={
    todos:[{id:1,text:"hello world"}]
}

const Todoslice = createSlice({
    name:"todo",
    initalstate,
    reducers:{
        Addtodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload //user jode thi text nai value leva
            }
            state.todos.push(todo)
        }
    }

})

export const{Addtodo}=Todoslice.actions;
export default Todoslice;