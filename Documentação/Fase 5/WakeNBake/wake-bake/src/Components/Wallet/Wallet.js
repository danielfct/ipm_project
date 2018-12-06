import React, { Component } from 'react';
import "../css/Wallet.css";

import Navbar from "../Navbar/Navbar";

class Wallet extends Component{
    constructor(props){
        super(props);
        this.state = {
            balance: 0
        }
        this.getBalance = this.getBalance.bind(this);
        this.updateBalance = this.updateBalance.bind(this);

        this.props.socket.on("getBalance",this.getBalance);
        this.props.socket.emit("getBalance",null);        
    }

    getBalance = function(balance){
        this.setState({balance:balance});
    }

    updateBalance = function(){
        let value = document.getElementById("newBalance").value;
        this.props.socket.emit("updateBalance",value);
    }

    checkIfNumber(){
        let val = document.getElementById("newBalance");
        let ascii = parseInt(val.value.charCodeAt(val.value.length-1));
        if(ascii<48 || ascii>57){
                val.value = val.value.substring(0,val.value.length-1);
        }
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div  id="content">
                    <div id="balance">
                        <h3>Current balance</h3>
                        <h4>{this.state.balance}€</h4>
                        <hr/>
                    </div>
                    <h3 id="headline">Deposit</h3>
                    <form>
                        <div className="row justify-content-center payments ">
                            <div className="col-xs-4">
                                <select className="custom-select" id="payment-options">
                                    <option defaultValue>Select payment option</option>
                                    <option value="1">MB</option>
                                    <option value="2">MBWay</option>
                                    <option value="3">Paypal</option>
                                    <option value="4">Credit Card</option>
                                </select>
                            </div>
                                <input id="newBalance" type="text" min="1" onChange={this.checkIfNumber}/>
                        </div>
                        <div className="payments" id="sub-btn-div">
                            <button type="button" className="btn btn-default btn-md" onClick={this.updateBalance}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Wallet;