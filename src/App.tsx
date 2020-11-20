import React from "react"
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import "./App.css"
import LoginForm from "./components/LoginForm"
import Main from "./components/Main"
import UserProfile from "./components/UserProfile"
import NotFound from "./components/NotFound"

import store from "./store"
import * as routes from "./routes"
import { Provider } from "react-redux"


function App() {
  const [isChecked, setIsChecked] = React.useState(false)

  const CustomRouteDefault = (props:any) => {
    if (!isChecked) {
      return <Route {...props} />
    }
    return <Redirect from={routes.LOGIN} exact to={routes.MAIN} />
  }

  const CustomRoute = (props:any) => {
    if (isChecked) {
      return <Route {...props} />
    }
    return <Redirect from="/" exact to={routes.LOGIN} />
  }

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          {isChecked && (
            <nav>
              <Link to={routes.MAIN}>Main</Link>
              <Link to={routes.PROFILE}>Profile</Link>
            </nav>
          )}
          <Switch>
            <CustomRouteDefault
              path={routes.LOGIN}
              render={(props:any) => (
                <LoginForm {...props} setIsChecked={setIsChecked} />
              )}
            />
            <CustomRoute path={routes.MAIN} component={Main} />
            <CustomRoute path={routes.PROFILE} component={UserProfile} />

            <Route path={routes.NOT_FOUND} component={NotFound} />
            <Redirect from="/" exact to={routes.LOGIN} />
            <Redirect to={routes.NOT_FOUND} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
