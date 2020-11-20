import { combineReducers } from "redux"
import userReducer from "./userReducer"
import jokeReducer from "./jokeReducer"
import authReducer from "./authReducer"
import { EmptyAction } from "typesafe-actions"
import {userAction, jokeAction, authAction} from './types'

const rootReducer = combineReducers({
  user: userReducer,
  joke: jokeReducer,
  auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type RootAction =
  | EmptyAction<string>
  | userAction
  | jokeAction
  | authAction

export default rootReducer
