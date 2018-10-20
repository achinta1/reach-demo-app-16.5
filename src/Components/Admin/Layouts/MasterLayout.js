import React,{Component} from 'react';
import Header from './Header';
import LeftMenu from './LeftMenu';
import Footer from './Footer';


class MasterLayout extends Component {
  render() {
    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <LeftMenu />
                <div className="main-panel">
                    {this.props.children}
                    <Footer />
                </div>
            </div>
        </div>
    );
  }
}
export default MasterLayout;