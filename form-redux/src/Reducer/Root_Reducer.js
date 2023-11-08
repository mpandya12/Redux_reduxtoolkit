import { combineReducers} from "redux"
import Reducer from "./Reducer"

const Root_Reducer=combineReducers({
    items:Reducer,
})

export default Root_Reducer;