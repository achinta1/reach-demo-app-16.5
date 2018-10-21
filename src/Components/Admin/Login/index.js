import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
const Loading=({ error })=> {
  if (error) {
    return '!Oops something hapenning wrong.';
  } else {
    return (<div className="col-lg-12 inner-content-loader">
    <Loader type="Bars" color="#1ec4d8" height={80} width={100} />
  </div>);
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