import { submitdata } from "../const"
import { v4 as uuidV4 } from "uuid";
export const submitData =(data)=>{
    return{
        type:submitdata,
        payload:data,
       
    }
}