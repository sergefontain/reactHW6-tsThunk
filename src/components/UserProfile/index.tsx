import React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { fetchUser } from "../../store/actions"
import { RootAction, RootState } from "../../store/rootReducer"

const mapStateToProps = (state: RootState) => ({
  firstName: state.user.name,
  lastName: state.user.familyName,
})

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  fetchUser: fetchUser(dispatch),
})

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>

const UserProfile: React.FC<Props> = ({ fetchUser, firstName, lastName }) => {
  const updateUser = () => {
    fetchUser()
  }

  React.useEffect(() => {
    updateUser()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <p onClick={() => updateUser()}>
        User: <span>{firstName}</span> <span>{lastName}</span>
      </p>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(UserProfile))
