import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    componentDidMount() {
        console.log(this.props.location)

  }
  render() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile">
                    <div className="nav-link">
                        <div className="user-wrapper">
                            <div className="profile-image">
                                <img src="./../../assets/admin/images/faces/face1.jpg" alt="profile image" />
                            </div>
                            <div className="text-wrapper">
                                <p className="profile-name">Achinta Kundu</p>
                                <div>
                                    <small className="designation text-muted">Manager</small>
                                    <span className="status-indicator online"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item active">
                    <Link to="/admin/dashboard"  className="nav-link">
                        <i className="menu-icon mdi mdi-television"></i>
                        <span className="menu-title">Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <i className="menu-icon mdi mdi-content-copy"></i>
                            <span className="menu-title">Manage Users</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <Link to="/admin/user-add" className="nav-link">User Add</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/admin/user-list" className="nav-link">User List</Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
  }
}
export default LeftMenu;