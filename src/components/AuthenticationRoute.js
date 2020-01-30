import React from 'react'
import {WithAuthConsumer} from '../contexts/AuthContext'
import { Redirect, Route } from 'react-router-dom'

const AuthenticatedRoute = (props) => {
  return props.currentUser ? <Route {...props}/> : <Redirect to="/login"/>
}

const NotAuthenticatedRoute = (props) => {
  return props.currentUser ? <Redirect to="/home"/> : <Route {...props}/>
}

export default {
  AuthenticatedRoute: WithAuthConsumer(AuthenticatedRoute),
  NotAuthenticatedRoute: WithAuthConsumer(NotAuthenticatedRoute)
}


