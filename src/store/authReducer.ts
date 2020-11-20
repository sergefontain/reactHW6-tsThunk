import { getType } from "typesafe-actions"
import { authAction } from "./types"
import * as actions from "./actions"

const initialState = {
  email: "",
}

const authReducer = (state = initialState, action: authAction) => {
  switch (action.type) {
    case getType(actions.loginSuccess):
      return { ...state, email: action.payload }

    default:
      return state
  }
}

export default authReducer
