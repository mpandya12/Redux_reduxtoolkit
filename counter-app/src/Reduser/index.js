import ChangeReduser from "./Reduser";
import {combineReducers} from "redux";

const root =combineReducers({
    ChangeNumber:ChangeReduser
})

export default root