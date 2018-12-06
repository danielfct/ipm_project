import React from 'react';
import '../css/LogoutModal.css';

import { Redirect } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import {logout, isLogged} from "../../Utils/Session";

export default class LogoutModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            modal: false,
            redirect: false
        };

        this.handleYes = this.handleYes.bind(this);
        this.handleNo = this.handleNo.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    handleYes() {
        logout();
        this.setState({redirect: true});
    }

    handleNo(){
        this.setState({redirect: false});
        this.onCloseModal();
    }

    onOpenModal(){
        this.setState({modal: true});
    }

    onCloseModal(){
        this.setState({modal: false});
    }

    render() {
        const {redirect} = this.state;
        let isLoged = isLogged();
        if(redirect){
            return<Redirect to="/"/>
        }
        return (
            <div>
                <a id="logoutBtn" onClick={this.onOpenModal}><b>Logout</b></a>
                <Modal isOpen={this.state.modal} className="modal-dialog modal-dialog-centered">
                    <ModalHeader toggle={this.onCloseModal}>Logout</ModalHeader>
                    <ModalBody>
                        <h4>Are you sure you want to logout?</h4>
                    </ModalBody>
                    <ModalFooter>
                        <input type="button" className="btn btn-info btn-lg" value="Yes" onClick={this.handleYes}/>
                        <input type="button" className="btn btn-info btn-lg" value="No" onClick={this.handleNo}/>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}