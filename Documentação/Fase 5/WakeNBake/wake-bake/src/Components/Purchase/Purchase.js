import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from "axios";


import Navbar from '../Navbar/Navbar';
import DatePage from './DatePage';
import Bread from './Bread';
import Bakery from './Bakery';
import '../css/Purchase.css';
import Address from './Address';
import Map from './Map';

/**
 * TODO:
 *  FIX LETTERS ON SMALL SIZES, THEY GO UNDER NAVBAR
 */

export default class Purchase extends React.Component{

    constructor(props){
        super(props);
        this.state={
            transaction: {},
            redirect: false,
            balance: 0,
            plan: ""
        }

        this.nextButton=this.nextButton.bind(this);
        this.getAll = this.getAll.bind(this);
        this.addTransaction = this.addTransaction.bind(this);
        this.getBalance = this.getBalance.bind(this);
        this.getPlan = this.getPlan.bind(this);
        this.changeBalance = this.changeBalance.bind(this);

        this.props.socket.on("getAll", this.getAll);
        this.props.socket.on("getPurchase",this.getAll);
        this.props.socket.on("getBalance", this.getBalance);
        this.props.socket.on("getPlan", this.getPlan);
        this.props.socket.emit("getPurchase",null);
        this.props.socket.emit("getBalance", null);
        this.props.socket.emit("getPlan", null);
    }

    changeBalance(data){
        this.props.socket.emit("changeBalance", Math.round(data * 100)/100);   
    }

    getPlan(data){
        this.setState({plan: data});
    }

    getBalance(data){
        this.setState({balance: data});
    }

    getAll(data) {
        this.setState({transaction: data});
    }

    addTransaction = () => {
        const {transaction, balance, plan} = this.state;

        const totalPrice = transaction.selectedItems.map((item) => item.price*item.total).reduce((acc, curr) => acc + curr, 0);
        const numOfDays = transaction.selectedDate.length;
        const totalPriceWithDays = totalPrice * numOfDays;
        const noMoney = balance < totalPriceWithDays;

        let useMoney = false;

        switch(plan){
            case "9.99€":
                if(numOfDays>12 && noMoney){
                    alert("You can only buy bread for 12 days with this plan! Choose another or make a deposit on your wallet!");
                    return;
                }
                if(numOfDays>12)
                    useMoney=!useMoney;
                break;
            case "19.99€":
                if(numOfDays>20 && noMoney){
                    alert("You can only buy bread for 20 days with this plan! Choose another or make a deposit on your wallet!");
                    return;
                }
                if(numOfDays>20)
                    useMoney=!useMoney;
                break;
            case "24.99€":
                if(numOfDays>31 && noMoney){
                    alert("You can only buy bread for 31 days with this plan! Choose another or make a deposit on your wallet!");
                    return;
                }
                if(numOfDays>31)
                    useMoney=!useMoney;
                break;
            default:
                if(noMoney){
                    alert("Not enough balance for this purchase! Buy a plan or make a deposit on your wallet!");
                    return;
                }
                useMoney=!useMoney;
                break;
        }

        if(useMoney){
            this.changeBalance(balance-totalPriceWithDays);
        }

        let val = (transaction.selectedItems.length > 0 && transaction.selectedAddress !== "" && transaction.selectedDate.length > 0);
        if(val){
            if(!this.checkBakeryDistance(transaction.addressCoord,transaction.selectedBakery.location)){
                alert("The bakery selected ("+transaction.selectedBakery.name+") does not deliver the provided address!");
            }else{  
                this.props.socket.emit("getAll", null);
                alert("Purchase sucessfull! Thank you for your business!");
                this.setState({redirect: true});
            }
        }else{
            alert("Not all fields have been specified.");
        }
    }

    checkBakeryDistance(selectedAddress,selectedBakery){
        let latA = selectedAddress[0];
        let latB = selectedBakery[0];
        let lonA = selectedAddress[1];
        let lonB = selectedBakery[1];

        let dist = Math.sqrt(Math.pow( (latA-latB), 2 ) +
                            Math.pow( (lonA-lonB), 2 )
        );
        let returnValue = false;
        if(dist<0.004){
            returnValue = true;
        }
        return returnValue;
    }

    nextButton = function(e){
        let tab = e.target.parentNode.parentNode.id;
        switch(tab){
            case "tabs-bread":
                document.getElementById("bakery-click").click();
                break;
            case "tabs-bakery":
                document.getElementById("address-click").click();
                break;
            case "tabs-address":
                document.getElementById("date-click").click();
                break;
            default:
                return false;
        }
        
    }

    render(){
        const {redirect} = this.state;
        if(redirect)
            return <Redirect to="/history"/>
        return(
            <div>
                <Navbar/>
                <Map socket={this.props.socket}/>
                <div className="underTheMap">
                <ul className="nav">
                    <li className="nav-item active item-1">
                        <a id="bread-click" className="nav-link active" href="#tabs-bread" role="tab" data-toggle="tab">Bread</a>
                    </li>
                    <li className="nav-item item-2">
                        <a id="bakery-click" className="nav-link" href="#tabs-bakery" role="tab" data-toggle="tab">Bakery</a>
                    </li>
                    <li className="nav-item item-3">
                        <a id="address-click" className="nav-link" href="#tabs-address" role="tab" data-toggle="tab">Address</a>
                    </li>
                    <li className="nav-item item-4">
                        <a id="date-click" className="nav-link" href="#tabs-date" role="tab" data-toggle="tab">Date</a>
                    </li>
                </ul>
                <hr/>
                <div className="tab-content">
                    <div className="tab-pane active in" id="tabs-bread">
                        <Bread socket={this.props.socket}/>
                        <br/>
                        <div className="container">
                            <button className="btn btn-primary right" onClick={this.nextButton}>Next</button>
                        </div>
                    </div>
                    <div className="tab-pane" id="tabs-bakery">
                        <Bakery socket={this.props.socket}/>
                        <br/>
                        <div className="container">
                            <button className="btn btn-primary right" onClick={this.nextButton}>Next</button>
                        </div>
                    </div>
                    <div className="tab-pane" id="tabs-address">
                        <Address socket={this.props.socket}/>
                        <br/>
                        <div className="container">
                            <button className="btn btn-primary right" onClick={this.nextButton}>Next</button>
                        </div>
                    </div>
                    <div className="tab-pane" id="tabs-date">
                        <DatePage socket={this.props.socket}/>
                        <br/>
                        <div className="container">
                            <button onClick={this.addTransaction} className="btn btn-primary right">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}