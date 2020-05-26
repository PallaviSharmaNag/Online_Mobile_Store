import React, { Component } from "react";
import {Link} from "react-router-dom";

class Login extends Component {

    render() {
        return (
            <div>
                <Link className="right-button" to={{pathname: '/login'}}>Login</Link>
                
            </div>
        )
    }
}
 
export default Login;
  