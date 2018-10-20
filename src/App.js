import React, { Component } from 'react';
import { Link, BrowserRouter as Router,Route  } from 'react-router-dom';
//============= routes file inport ===========
import FrontHomeRoutes from './Components/Front/Home/index';
import LoginRoutes from './Components/Admin/Login/index';
import DashboardRoutes from './Components/Admin/Dashboard/index';
import UserRoutes from './Components/Admin/Users/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Link to="/admin/login">admin Login</Link>
          <Link to="/admin/about">about</Link> */}
          <FrontHomeRoutes />
          <LoginRoutes />
          <DashboardRoutes />
          <UserRoutes />
          {/* <script src="/assets/admin/js/sb-admin-2.min.js"></script> */}
        </div>
      </Router>
    );
  }
}

export default App;