import { userAction, userState } from "./types"
import * as actions from "./actions"
import { getType } from "typesafe-actions"

const initialState: userState = {
  name: "",
  familyName: "",
}

export default function JokeReducer(
  state: userState = initialState,
  action: userAction
): userState {
  switch (action.type) {
    case getType(actions.setUser):
      return {
        ...state,
        name: action.payload.results[0].name.first,
        familyName: action.payload.results[0].name.last,
      }
    default:
      return state
  }
}
