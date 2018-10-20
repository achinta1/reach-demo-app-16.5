import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import MasterLayout from './../Layouts/MasterLayout';
const Loading = ({ error })=> {
  if (error) {
    return '!Oops something hapenning wrong.';
  } else {
    return <h3>Loading...</h3>;
  }
}
const DashboardPage = Loadable({
  loader: () => import('./Contents/Dashboard'),
  loading: Loading
});
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)
const DashboardRoutes=()=>{
  return (
    <Switch>
      {/* <MasterLayout> */}
        {/* <Route exact path="/admin/about" component={AboutPage}  /> */}
        <AppRoute exact path="/admin/dashboard" layout={MasterLayout} component={DashboardPage} />
      {/* </MasterLayout> */}
    </Switch>
  );
}
export default DashboardRoutes;