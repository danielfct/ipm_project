import React from 'react';
import '../css/Modal.css';
import '../css/colors.css';


export default class CreateAccountModal extends React.Component {
    render() {
        return (
            <div id="create-account-modal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title blue">Create Account</h4>
                            <button type="button" className="close blue" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                        <form id="create-form">
					        <input type="text" className="form-control" name="user-name" placeholder="Your Name" required="required"/>
					        <input type="text" className="form-control" name="user-email" placeholder="Your Email" required="required"/>
                            <input type="password" className="form-control" name="user-password" placeholder="Your Password" required="required"/>
                            <input type="text" className="form-control" name="user-adress" placeholder="Your Address"/>
				        </form>
                        </div>
                        <div className="modal-footer">
                            <input type="submit" name="create-account" className="btn btn-info btn-lg" value="Submit"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}