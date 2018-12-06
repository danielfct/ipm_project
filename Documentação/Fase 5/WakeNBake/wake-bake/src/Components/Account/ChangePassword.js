import React, { Component } from 'react';

class ChangePassword extends Component{
    render(){
        return(
            <div>
                <h3>Change Password</h3>
                <br/>
                <form className="form-horizontal">
                    <div className="form-group row">
                        <label htmlFor="current" className="col-sm-2 col-form-label labels">Current Password:</label>
                        <div className="col-sm-6">
                            <input type="password" name="current" id="current" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="new" className="col-sm-2 col-form-label labels">New Password:</label>
                        <div className="col-sm-6">
                            <input type="password" name="new" id="new" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="repeat" className="col-sm-2 col-form-label labels">Confirm password:</label>
                        <div className="col-sm-6">
                            <input type="password" name="repeat" id="repeat" className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}

export default ChangePassword;