import { ActionType } from "typesafe-actions"
import * as actions from "./actions"

export type userAction = ActionType<typeof actions>
export type jokeAction = ActionType<typeof actions>
export type authAction = ActionType<typeof actions>

export interface jokeState {
  text: string
  id: string
}

export interface userState {
  name: string
  familyName: string
}