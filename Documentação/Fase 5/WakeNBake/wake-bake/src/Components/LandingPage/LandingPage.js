import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

import logo from '../../logo.svg';
import Navbar from "../Navbar/Navbar";

import "../css/LandingPage.css";
import {login} from "../../Utils/Session";
import {Redirect} from "react-router-dom";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            redirect: false,
            email: "",
            password: "",
            showError: false
        }

        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal= this.onCloseModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    onOpenModal(){
        this.setState({modal: true});
    }

    onCloseModal(){
        this.setState({modal: false});
    }

    handleLogin() {
        const {email, password} = this.state;
        if(email == "filipe_pires@gmail.com" && password == "password123" && email != "" && password != "") {
            login();
            this.setState({redirect: true});
        }
        else
            this.setState({showError: true});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    handleEmailChange(event){
        this.setState({email: event.target.value});
    }

    render() {
        const {redirect, showError} = this.state;
        if(redirect){
            return<Redirect to="/inventory"/>
        }
        return (
            <div className="App">
                <Navbar/>
                <header className="App-header">

                    <div id="logo-title">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="wake-title">
                            Wake N' Bake
                        </h1>
                    </div>

                    <div id="container">
                        <button type="button" className="btn btn-info btn-lg" onClick={this.onOpenModal}>Login</button></div>
                    <Modal isOpen={this.state.modal} className="modal-dialog modal-dialog-centered">
                        <ModalHeader toggle={this.onCloseModal}>Login</ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleEmailChange}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handlePasswordChange}/>
                            </div>
                            {showError && <div id="error"><p><b>Email or password invalid!</b></p></div>}
                        </ModalBody>
                        <ModalFooter>
                            <input type="submit" className="btn btn-info btn-lg" value="Login" onClick={this.handleLogin}/>
                        </ModalFooter>
                    </Modal>


                </header>
            </div>
        );
    }
}

export default App;
