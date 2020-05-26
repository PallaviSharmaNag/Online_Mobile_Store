import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { login } from "../actions";
import { connect } from "react-redux";


class LoginForm extends Component {
    constructor() {
        super();    
        this.user = {
            username:"",
            password:""
        }
      }

      setUsername(username){
        this.user.username = username;
      }

      setPassword(password){
          this.user.password = password;
      }

   
    render() {
        return (
            <div>
                    <form>
                    <h2>Login To Shop</h2>

                     <div class="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" 
                            onChange={event =>
                            this.setUsername({
                                username: event.target.value
                            })}
                            name="uname" required/>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password"
                         onChange={event =>
                            this.setPassword({
                                password: event.target.value
                            })}
                         name="psw" required/>
                            
                        <button type="submit" onClick={() => this.props.login(this.user.username, this.user.password)}>Login</button>
                    </div>
                    
                    </form>
                    


            </div>

            
        );
    }
}
  
function mapStateToProps(state) {
    return {
      user: state.login.user
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
