import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import "./App.css";

import LandingPage from "./Components/LandingPage/LandingPage";
import Account from "./Components/Account/Account";
import Wallet from "./Components/Wallet/Wallet";
import History from "./Components/History/History";
import Plans from "./Components/Plans/Plans";
import Inventory from "./Components/Inventory/Inventory"
import Purchase from './Components/Purchase/Purchase';


import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:9999');

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/inventory" component={()=><Inventory socket={socket}/>}/>
                    <Route exact path="/plans" component={()=><Plans socket={socket}/>}/>
                    <Route exact path="/purchase" component={()=><Purchase socket={socket}/>}/>
                    <Route exact path="/history" component={() =><History socket={socket}/>}/>
                    <Route exact path="/wallet" component={()=><Wallet socket={socket}/>}/>
                    <Route exact path="/settings" component={()=><Account socket={socket}/>}/>
                    <Route exact path="/" component={LandingPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;