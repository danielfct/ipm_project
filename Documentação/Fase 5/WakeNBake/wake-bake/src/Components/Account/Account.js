import React, { Component } from 'react';
import "../css/Account.css";
import PersonalData from "./PersonalData";
import ChangePassword from "./ChangePassword";
import Navbar from "../Navbar/Navbar";

class Account extends Component{
    render(){
        return(
            <div className="container">
                <Navbar/>
                <br/>
                <br/>
                <br/>
                <br/>
                {/*<ul className="nav">
                    <li className="nav-item active item-1">
                        <a className="nav-link active" href="#tabs-personal" role="tab" data-toggle="tab">Personal Data</a>
                    </li>
                    <li className="nav-item item-2">
                        <a className="nav-link" href="#tabs-password" role="tab" data-toggle="tab">Change Password</a>
                    </li>
                </ul>*/}
                <hr/>
                <div className="tab-content">
                    <div className="tab-pane active in" id="tabs-personal">
                        <PersonalData socket={this.props.socket}/>
                    </div>
                   {/* <div className="tab-pane" id="tabs-password">
                        <ChangePassword socket={this.props.socket}/>
                    </div>*/}
                </div>
            </div>
        );
    }
}

export default Account;