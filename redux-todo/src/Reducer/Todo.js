const initaldata={
    item:[]
}

const ToDoReducer =(state=initaldata,action)=>{
  switch(action.type){
    case "AddToDo" :
        const {id,data}=action.payload
      return{
        //pre data
        ...state,
         item:[
            ...state.item,
            {

            id:id,
            data:data
         }]
      }

      default:return state
  }

}

export default ToDoReducer