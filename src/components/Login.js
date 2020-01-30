import React from 'react'
import {login} from '../Services/TweetHackService'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    error: false,
    loading: false
  }

  handleChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({
      loading: true,
      error:false
    }, () => {
      login({...this.state.data})
        .then(
          this.props.setUser, 
          () => this.setState({error:true, loading:false})
        )
    }
    )
  }

  render() {
    console.log(login)
    const errorClassName = this.state.error ? 'is-invalid' : ''

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              value={this.state.data.email}
              onChange={this.handleChange}
              autoComplete="off"
              name="email"
              type="email"
              className={`form-control ${errorClassName}`}
              id="email"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mb-5">
            <label htmlFor="password">Password</label>

            <input
              value={this.state.data.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              className={`form-control ${errorClassName}`}
              id="password"
              placeholder="Password"
            />
          </div>
              
          <button
            type="submit"
            className="btn btn-block btn-primary mb-3"
            disabled={this.state.loading}
          >
            Log in
          </button>

          <Link to="/signup">Register</Link>
        </form>
      </div>
    )
  }
}

export default Login
