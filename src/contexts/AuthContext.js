import React, { createContext } from 'react'
import {logout} from '../Services/TweetHackService'

const AuthContext = createContext()

export class AuthContextProvider extends React.Component {
  state = {
    user: JSON.parse(localStorage.getItem('user'))
  }

  setUser = (user = null) => {
    localStorage.setItem('user', JSON.stringify(user))
    this.setState({ user })
  }

  logout = () => {
    logout().then(this.setUser)
  }

  render() {
    const value = {
      currentUser: this.state.user,
      setUser: this.setUser,
      logout: this.logout
    }

    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export const WithAuthConsumer = (WrappedComponent) => (props) => {
  return (
    <AuthContext.Consumer>
      {(authProps) => (<WrappedComponent {...props} {...authProps}/>)}
    </AuthContext.Consumer>
  )
}

export default AuthContext
