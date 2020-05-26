import React, { Component } from "react";
import Header from "./Header";
import "../styles/index.css";
import MobileList from "./MobileList";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import MobileDetail from "./MobileDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
       <h4 className="title">Mobile Online Store</h4>
        <div className="col-md-12">
          <Header/>
        </div>
        <div>
          <Switch>
            <Route path='/mobile/:id' component={MobileDetail}/>
            <Route exact path='/' component={MobileList}/>
            <Route path='/login' component={LoginForm}/>
          </Switch>
        </div>      
      </div>
    );
  }
}

export default App;