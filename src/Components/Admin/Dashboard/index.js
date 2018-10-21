import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import MasterLayout from './../Layouts/MasterLayout';
import Loader from 'react-loader-spinner';
const Loading = ({ error })=> {
  if (error) {
    return '!Oops something hapenning wrong.';
  } else {
    return (<div className="col-lg-12 inner-content-loader">
    <Loader type="Bars" color="#1ec4d8" height={80} width={100} />
  </div>);
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