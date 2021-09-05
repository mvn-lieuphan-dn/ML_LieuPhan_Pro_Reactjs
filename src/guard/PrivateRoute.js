import React from 'react'
import { Route, Redirect } from "react-router-dom"
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({children, ...rest}) => {
  const auth = useAuth();
  return (
    <Route
      {...rest} render={() => auth.isLogined ? children : <Redirect to="/auth/login" />}
    />
  )
}
export default PrivateRoute;
