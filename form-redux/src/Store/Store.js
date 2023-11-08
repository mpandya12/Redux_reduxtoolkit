import{createStore} from "redux"
import Root_Reducer from "../Reducer/Root_Reducer"


const store = createStore(Root_Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;