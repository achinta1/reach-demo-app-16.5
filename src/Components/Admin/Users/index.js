import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import MasterLayout from './../Layouts/MasterLayout';
const Loading=({ error })=>{
  if (error) {
    return '!Oops something hapenning wrong.';
  } else {
    return <h3>Loading...</h3>;
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