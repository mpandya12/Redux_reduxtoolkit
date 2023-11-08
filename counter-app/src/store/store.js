
//add reduser in store
import{createStore} from"redux"

import root from "../Reduser"

const store = createStore(root, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store