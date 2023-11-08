import { useReducer } from "react";
import { submitdata } from "../const";

const inintal={
  items:[]

}

const Onsubmit=(state=inintal,action)=>{
    

    
    switch(action.type){
       
        case submitdata : 
        
         return{
        //pre data
        ...state,
        items:[
            ...state.items,
              action.payload

        ]
      }

        default: return state

    }
    
}

export default Onsubmit;

