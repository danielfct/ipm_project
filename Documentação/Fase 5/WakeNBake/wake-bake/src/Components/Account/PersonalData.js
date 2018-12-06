import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class PersonalData extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"Jose Luis",
            phone:"939393939",
            address:"Rua Amarela nr 7 3D",
            redirect: false
        }

        this.updateAddress = this.updateAddress.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updatePhone = this.updatePhone.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.props.socket.on("getUserInfo",this.getUser.bind(this));
        this.props.socket.emit("getUserInfo",null);
    }

    getUser(data){
        this.setState({name:data.name,phone:data.phone,address:data.address});
    }

    updateUser(){
        let data = {name:this.updateName(),phone:this.updatePhone(),address:this.updateAddress()};
        this.props.socket.emit("updateUser",data);
        this.setState({redirect:true});
    }

    updateAddress(){
        let val = document.getElementById("address").value;
        this.setState({address:val});
        return val;

    }

    updateName(){
        let val = document.getElementById("name").value;
        this.setState({name:val});
        return val;
    }
    updatePhone(){
            let val = document.getElementById("phone");
            let ascii = parseInt(val.value.charCodeAt(val.value.length-1));
            if(ascii<48 || ascii>57){
                    val.value = val.value.substring(0,val.value.length-1);
            }else{
                  this.setState({phone:val.value});
            }
        return val.value;
    }

    render(){
        const {redirect} = this.state;
        if(redirect){
            return<Redirect to="/inventory"/>
        }
        return(
            <div>
                <h3>Personal Data</h3>
                <br/>
                <div className="form-horizontal">
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label labels">Name:</label>
                        <div className="col-sm-6">
                            <input type="text" onChange={this.updateName} id="name" className="form-control" placeholder={this.state.name} value={this.state.name}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label labels">Telephone:</label>
                        <div className="col-sm-6">
                            <input onChange={this.updatePhone} type="tel" id="phone" className="form-control" placeholder={this.state.phone} value={this.state.phone}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label labels">Address:</label>
                        <div className="col-sm-6">
                            <input onChange={this.updateAddress} type="text" id="address" className="form-control" placeholder={this.state.address} value={this.state.address}/>
                        </div>
                    </div>
                    <br/>
                    <button onClick={this.updateUser} className="btn btn-default">Save</button>
                </div>
            </div>
        );
    }
}

export default PersonalData;