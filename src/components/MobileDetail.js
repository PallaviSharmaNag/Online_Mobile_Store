import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

class MobileDetail extends Component {

    constructor() {
        super();    
        this.currentId = '';
      }

    render() {
        
        this.currentId = this.props.location.pathname.split('/')[2];
        var mobile = this.props.mobiles.find(p => p.id == this.currentId);
        return (
            <div>
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
                      <Link className="link" to={"/"}>Back</Link>
                    </button>
                    <button className="col-md-6" onClick={() => this.props.addMobileById(mobile.id)}>
                        Add To Cart
                    </button>
                </div>
            </div>
        )
    }
}
 
function mapStateToProps(state) {
    return {
      mobiles: state.mobiles
    };
  }

export default connect(mapStateToProps)(MobileDetail);