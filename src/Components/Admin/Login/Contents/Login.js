/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
// import { Panel, Input, Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/lib/Button';
// import Panel from 'react-bootstrap/lib/Panel';
 import { FormControl} from 'react-bootstrap';
// import {withStyles} from 'isomorphic-style-loader';
// import s from './../Styles/Login.css';
//import history from '../../core/history';
//import createHistory from 'history/createBrowserHistory';
const formsubmitted = false;
class Login extends React.Component {
  //======== constructor call =======
  constructor(props){
    super(props);
    this.state = {
      fields: {},
      errors: {},
    }
  }
  //
  handleValidation=()=>{
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //user-Name
    if(!fields["username"]){
      formIsValid = false;
      errors["username"] = "This field is required";
    }
    if(typeof fields["username"] !== "undefined"){
      if(!fields["username"].match(/^[a-zA-Z0-9]+$/)){
        formIsValid = false;
        errors["username"] = "Letters and numbers only.";
      }        
    }
    //Email
    // if(!fields["email"]){
    //   formIsValid = false;
    //   errors["email"] = "This field is required";
    // }
    // if(typeof fields["email"] !== "undefined"){
    //   let lastAtPos = fields["email"].lastIndexOf('@');
    //   let lastDotPos = fields["email"].lastIndexOf('.');
    //   if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
    //     formIsValid = false;
    //     errors["email"] = "Email is not valid";
    //   }
    // }
    //password
    if(!fields["password"]){
      formIsValid = false;
      errors["password"] = "This field is required";
    }  
    this.setState({errors: errors});
    return formIsValid;
  }
  //
  AdminLoginHandler=(event)=> {
    event.preventDefault();
    if(this.handleValidation()){
      //alert("Form submitted");
      this.formsubmitted = true;
    }else{
      //alert("Form has errors.");
    }
    //history.push('/');
  }
  //
  AdminLoginInputdataChange=(field, e)=>{
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }
  //======= render data =============
  render=()=> {
    if (this.formsubmitted ) {
      return (<Redirect to='/admin/dashboard' />);
    }else{
      return (
        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper full-page-wrapper auth-page">
            <div className="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
              <div className="row w-100">
                <div className="col-lg-4 mx-auto">
                  <div className="auto-form-wrapper">
                    <form onSubmit={this.AdminLoginHandler.bind(this)}>
                      <div className="form-group">
                        <label className="label">Username</label>
                        <div className="input-group">
                          <FormControl
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          name="username"
                          onChange={this.AdminLoginInputdataChange.bind(this, "username")} 
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <i className="mdi mdi-check-circle-outline"></i>
                            </span>
                          </div>
                        </div>
                        <span style={{color: "red"}}>{this.state.errors["username"]}</span>
                      </div>
                      <div className="form-group">
                        <label className="label">Password</label>
                        <div className="input-group">
                          <FormControl
                          type="password"
                          className="form-control"
                          placeholder="*********"
                          name="password"
                          onChange={this.AdminLoginInputdataChange.bind(this, "password")}
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <i className="mdi mdi-check-circle-outline"></i>
                            </span>
                          </div>
                        </div>
                        <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-primary submit-btn btn-block">Login</button>
                      </div>
                      <div className="text-block text-center my-3">
                        <span className="text-small font-weight-semibold">Problen with login ? </span>
                        <a href="#" className="text-black text-small"> Reset Password</a>
                      </div>
                    </form>
                  </div>
                  <ul className="auth-footer">
                    <li>
                      <a href="#">Conditions</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                  </ul>
                  <p className="footer-text text-center">copyright © 2018 demo react. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Login;