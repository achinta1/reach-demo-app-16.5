import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
const Loading=({ error })=> {
  if (error) {
    return '!Oops something hapenning wrong.';
  } else {
    return <h3>Loading...</h3>;
  }
}
const LoginPage = Loadable({
  loader: () => import('./Contents/Login'),
  loading: Loading
});
const LoginRoutes=()=>{
  return (
    <Switch>
      <Route exact  path="/admin" component={LoginPage} />
      <Route  path="/admin/login" component={LoginPage} />
    </Switch>
  );
}
export default LoginRoutes;