import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addMobileById } from "../actions";
import {Link} from "react-router-dom";

class MobileList extends Component {   
  render() {
    console.log("this.props", this.props);
    return (
      <div>
       
        <ul className="list-group">
          {this.props.mobiles.map(mobile => {
            return (
              <li key={mobile.id} className="col-md-3 list-group-item">
                 <div className="row">
                    <div>
                    {/* <img src={mobile.imidUrl} width="100" height="50" /> */}
                    <img src={require('../assets/motorola-atrix-4g.0.jpg')} width="200" height="200" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                       {mobile.name}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                       Price: Rs.{mobile.price}
                    </div>
                </div>
                <div className="row">
                    <button className="col-md-6">
                      <Link className="link" to={`/mobile/${mobile.id}`}>View</Link>
                    </button>
                    <button className="col-md-6" onClick={() => this.props.addMobileById(mobile.id)}>
                        Add To Cart
                    </button>
                </div>                
              </li>              
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mobiles: state.mobiles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMobileById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileList);
