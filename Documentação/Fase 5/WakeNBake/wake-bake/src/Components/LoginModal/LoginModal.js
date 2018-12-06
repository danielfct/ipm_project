import React from 'react';
import '../css/Modal.css';
import '../css/colors.css';

import { Redirect } from "react-router-dom";

import {login} from "../../Utils/Session";

export default class CreateAccountModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            redirect: false,
        };

        this.handleLogin = this.handleLogin.bind(this);

    }

    handleLogin() {
        login();
        this.setState({redirect: true});
        document.getElementById("timesBtn").click();
    }

    render() {
        const {redirect} = this.state;
        if(redirect){
            return<Redirect to="/inventory"/>
        }
    return (
        <div id="login-modal" className="modal fade" role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title blue">Login</h4>
                    <button type="button" id="timesBtn" className="close blue" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                   <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                </div>
                <div className="modal-footer">
                    <input type="submit" className="btn btn-info btn-lg" value="Login" onClick={this.handleLogin}/>
                </div>
            </div>
        </div>
    </div>
    );
  }
}