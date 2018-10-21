import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import MasterLayout from './../Layouts/MasterLayout';
import Loader from 'react-loader-spinner';
const Loading=({ error })=>{
  if (error) {
    return '!Oops something hapenning wrong.';
  } else {
    return (<div className="col-lg-12 inner-content-loader">
    <Loader type="Bars" color="#1ec4d8" height={80} width={100} />
  </div>);
  }
}
// load list page
const UserListPage = Loadable({
  loader: () => import('./Contents/UserList'),
  loading: Loading
});
//load add page
const UserAddPage = Loadable({
  loader: () => import('./Contents/UserAdd'),
  loading: Loading
});
//load update page
const UserUpdatePage = Loadable({
  loader: () => import('./Contents/UserUpdate'),
  loading: Loading,
});
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)
const UserRoutes=()=>{
  return (
    <Switch>
      <AppRoute exact path="/admin/user-list" layout={MasterLayout} component={UserListPage}  />
      <AppRoute exact path="/admin/user-add" layout={MasterLayout} component={UserAddPage} />
      <AppRoute path="/admin/user-update/:id" layout={MasterLayout} component={UserUpdatePage} />
    </Switch>
  );
}
export default UserRoutes;