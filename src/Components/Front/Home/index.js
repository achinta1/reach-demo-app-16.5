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
const HomePage = Loadable({
  loader: () => import('./Contents/Home'),
  loading: Loading
});
const HomeRoutes=()=>{
  return (
    <Switch>
      <Route exact  path="/" component={HomePage} />
    </Switch>
  );
}
export default HomeRoutes;