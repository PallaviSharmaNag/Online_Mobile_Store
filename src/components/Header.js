import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Logout from "./Logout";

class Header extends Component {

    render() {
        return (
            this.props.isLogged
            ? <Logout/>
            : <Login/>
        )
    }
}

function mapStateToProps(state) {
    return {
      isLogged: state.isLogged
    };
  }
  
  
export default connect(mapStateToProps)(Header);
  