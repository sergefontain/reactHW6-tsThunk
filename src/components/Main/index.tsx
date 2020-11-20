import React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { fetchJoke } from "../../store/actions"
import { RootAction, RootState } from "../../store/rootReducer"


const mapStateToProps = (state: RootState) => ({
  jokeText: state.joke.text,
})

const mapDispatchToProps = (dispatch:Dispatch<RootAction>) => ({
  fetchJoke: fetchJoke(dispatch),
})

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>
type CustomFC = ReturnType<typeof fetchJoke>


const Main: React.FC<Props> = ({jokeText,fetchJoke}) => {
  // console.log("Joke -> props", props);

  const updateJoke:CustomFC = () => {
    fetchJoke()
  }

  React.useEffect(() => {
    updateJoke()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <p onClick={() => updateJoke()}>Joke: {jokeText}</p>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Main))
