import React from "react"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import { checkLoginPass } from "../../store/actions"
import { RootAction } from "../../store/rootReducer"

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators(
    { setEmail: (payload) => ({ type: "LOGIN_SUCCESS", payload }) },
    dispatch
  )

type Props = ReturnType<typeof mapDispatchToProps> & {
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginForm: React.FC<Props> = ({ setEmail, setIsChecked }) => {
  const [login, setLogin] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault() // нужно, чтобы анулировать умолчательное поведение
    // браузера при отправке формы, которая перезагружает страницу. Если
    // это произойдет, то мы потеряем данные и нечего будет отправлять
    // на сервер...
    // Далее по коду должен идти запрос на сервер для проверки введенного
    // логина и пароля. Вместо него вызываем функцию, имитирующую запрос...
    try {
      await checkLoginPass(login, password)
      setEmail(login)
      componentUnmount()
    } catch (e) {
      alert(`Check your credentials. Your input is ${e}.`)
      pageRefresh()
    }
  }

  const componentUnmount = () => {
    setIsChecked(true)
  }
  const pageRefresh = () => {
    setLogin("")
    setPassword("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
      <input value={login} onChange={(e) => setLogin(e.target.value)} />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
    </form>
  )
}

//если в компоненте нет состояния и нужно только менять значение, то
// вместо mapStateToProps в коннект передается null, а сама функция
// mapStateToProps в компоненте не создается.
export default connect(null, mapDispatchToProps)(React.memo(LoginForm))
