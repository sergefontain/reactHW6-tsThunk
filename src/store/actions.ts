import { createAction } from "typesafe-actions"

export const setJoke = createAction("SET_JOKE", (data) => data)()

export const setUser = createAction("SET_USER", (data) => data)()

export const loginSuccess = createAction("LOGIN_SUCCESS", (data) => data)()

export const fetchJoke = (chainDispatch: any) => () => {
  setTimeout(() => {
    fetch("https://icanhazdadjoke.com", {
      headers: {
        accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => chainDispatch(setJoke(data)))
  }, 3000)
}

export const fetchUser = (chainDispatch: any) => () => {
  setTimeout(() => {
    fetch("https://randomuser.me/api/", {
      headers: {
        url: "https://randomuser.me/api/",
        accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => chainDispatch(setUser(data)))
  }, 3000)
}

export const checkLoginPass = (login: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      login === "admin" && password === "123" ? resolve("ok") : reject("wrong")
    }, 3000)
  })
}
