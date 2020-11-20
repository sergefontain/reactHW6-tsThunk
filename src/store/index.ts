import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"

// -- this fragment for redux-devtools-extension(FireFox) --
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
)

export default store