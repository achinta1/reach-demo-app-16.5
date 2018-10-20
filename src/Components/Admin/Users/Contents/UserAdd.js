import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
import axios from 'axios';
import {apiDomainPath} from './../../../../GlobalConfig';
class UserAdd extends Component {
  //======== constructor call =======
  constructor(props){
    super(props);
    this.state = {
      fields: {},
      errors:{},
      formsubmitted:false
    }
  }
  // error handle
  componentDidCatch(error, info) {
    var _this = this;
    _this.setState({ errors: error });
  }
  //
  FormSubmitHandler=(event)=>{
    event.preventDefault();
    var _this=this;
    if(this.handleValidation()){
      //alert("Form submitted");
      axios.post(apiDomainPath.path+'/add.php',this.state.fields,{headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }})
      .then(function(res){
        _this.setState({formsubmitted:true});
      })
      .catch(function(e) {
        console.log("ERROR ", e);
      })
    }else{
      //alert("Form has errors.");
    }
  }
  //
  handleValidation=()=>{
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //user-Name
    if(!fields["user_name"]){
      formIsValid = false;
      errors["user_name"] = "This field is required";
    }
    if(typeof fields["user_name"] !== "undefined"){
      if(!fields["user_name"].match(/^[a-zA-Z0-9]+$/)){
        formIsValid = false;
        errors["user_name"] = "Letters and numbers only.";
      }        
    }
    //Email
    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "This field is required";
    }
    if(typeof fields["email"] !== "undefined"){
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    //password
    if(!fields["password"]){
      formIsValid = false;
      errors["password"] = "This field is required";
    }
    //password
    if(!fields["phone"]){
      formIsValid = false;
      errors["phone"] = "This field is required";
    }    
    this.setState({errors: errors});
    return formIsValid;
  }
  //
  OnInputdataChange=(field, e)=>{
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }
  render=()=>{
    if(this.state.formsubmitted){
      return (<Redirect to='/admin/user-list' />);
    }else{
      return (
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Manage Users <span className="pull-right"> <Link to="/admin/user-list" style={{textDecoration:'none'}}><i className="fa fa-long-arrow-left"></i> Back</Link></span></h4>
                    <p className="card-description">
                      <code>User Add</code>
                    </p>

                    <form className="forms-sample"  onSubmit={this.FormSubmitHandler.bind(this)}>
                      <div className="form-group">
                        <label htmlFor="exampleInputUserName1">User Name</label>
                        <input type="text" className="form-control" id="exampleInputUserName1" placeholder="user Name" name="user_name" onChange={this.OnInputdataChange.bind(this, "user_name")}  />
                        <span style={{color: "red"}}>{this.state.errors["user_name"]}</span>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail3">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" name="email" onChange={this.OnInputdataChange.bind(this, "email")} />
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword4">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword4" placeholder="**********" name="password" onChange={this.OnInputdataChange.bind(this, "password")} />
                        <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                      </div>
                      {/* <div className="form-group">
                        <label>File upload</label>
                        <input type="file" name="img[]" className="file-upload-default">
                        <div className="input-group col-xs-12">
                          <input type="text" className="form-control file-upload-info" disabled="" placeholder="Upload Image">
                          <span className="input-group-append">
                            <button className="file-upload-browse btn btn-info" type="button">Upload</button>
                          </span>
                        </div> 
                      </div>*/}
                      <div className="form-group">
                        <label htmlFor="exampleInputPhoneNumber1">Phone Number</label>
                        <input type="text" className="form-control" id="exampleInputPhoneNumber1" placeholder="Phone Number" name="phone" onChange={this.OnInputdataChange.bind(this, "phone")} />
                        <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                      </div>
                      <button type="submit" className="btn btn-success mr-2">Save</button>
                      <Link to="/admin/user-list" className="btn btn-light">Cancel</Link>
                    </form>

                  </div>
                </div>
              </div>
          </div>
        </div>
      );
    }
  }
}
export default UserAdd;