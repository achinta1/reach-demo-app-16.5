import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Home extends Component {
  render=()=> {
    return (
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper auth-page">
          <div className="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
            <div className="row w-100">
              <p style={{textAlign:"center",marginLeft:"47%"}}> <Link to="/admin" style={{    padding: "7px",textDecoration: "none",color: "white"}}>Welcome to React Demo App</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;