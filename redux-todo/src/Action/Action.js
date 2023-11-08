import { v4 as uuidV4 } from "uuid";

export const AddTodo=(data)=>{
    return{
        type:"AddToDo",
        payload:{
            id:uuidV4(),
            data:data
        }
    }
}
export const DeleteToDo=()=>{
    return{
        type:"DeleteToDo"
    }
}