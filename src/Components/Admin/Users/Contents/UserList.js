import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {apiDomainPath} from './../../../../GlobalConfig';
import Loader from 'react-loader-spinner';

import FlashMessage from 'react-flash-message';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      errors:{},
      loaderAppear:true
    }
  }
  
  // error handle
  componentDidCatch(error, info) {
    var _this = this;
    _this.setState({ errors: error });
  }
  componentDidMount() {
    var _this = this;
    axios.get(apiDomainPath.path+'/list.php')
    .then(function(res){
      _this.setState({
        userList: res.data,
        loaderAppear:false
      });
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }
  render=() =>{
    return (
      <div className="content-wrapper">

        <FlashMessage duration={5000}>
          <strong>I will disapper in 5 seconds!</strong>
        </FlashMessage>

        <div className="row">
          {this.state.loaderAppear ? (
            <div className="col-lg-12 inner-content-loader">
              <Loader type="Bars" color="#1ec4d8" height={80} width={100} />
            </div>
          ) :(
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                  Manage Users <span className="pull-right"> <Link to="/admin/user-add" style={{textDecoration:'none'}}><i className="fa fa-plus-square"></i> Add</Link></span>
                  </h4>
                  <p className="card-description">
                    <code>User List</code>
                  </p>
                  <div className="table-responsive">
                    <table className="table table-dark">
                      <thead>
                        <tr>
                          <th>SL</th>
                          <th>User Name </th>
                          <th> Email</th>
                          <th>Pnone Number</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.userList.length<=0 ? (
                          <tr key="0">
                            <td colSpan="6" align="center">No Record found</td>
                          </tr>
                        ):(<tr></tr>)}
                        {this.state.userList.map((users,index) =>
                          <tr key={users.id}>
                            <td>{index+1}</td>
                            <td>{users.user_name}</td>
                            <td>{users.email}</td>
                            <td>{users.phone}</td>
                            <td>
                              <span><Link to={`/admin/user-update/${users.id}`} style={{color:'#fff',textDecoration:'none'}}><i className="fa fa-pencil" title="Edit"></i> Edit</Link></span>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default UserList;