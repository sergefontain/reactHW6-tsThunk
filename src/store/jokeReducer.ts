import { getType } from "typesafe-actions"
import { jokeAction, jokeState } from "./types"
import * as actions from "./actions"

const initialState: jokeState = {
  id: "",
  text: "",
}

export default function JokeReducer(
  state: jokeState = initialState,
  action: jokeAction
): jokeState {
  switch (action.type) {
    case getType(actions.setJoke):
      return {
        ...state,
        id: action.payload.id,
        text: action.payload.joke,
      }
    default:
      return state
  }
}
