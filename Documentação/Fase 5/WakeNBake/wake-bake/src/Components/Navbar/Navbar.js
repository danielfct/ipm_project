import React, { Component } from 'react';
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import LogoutModal from "../LogoutModal/LogoutModal";
import {isLogged} from "../../Utils/Session";

class Navbar extends Component{
    render(){
        let isLoged = isLogged();
        return(
            <nav className="navbar navbar-expand-md fixed-top navbar-dark">
                <a className="navbar-brand"><b>Wake N' Bake</b></a>
                {isLoged &&
                <button className="navbar-toggler btn-sm" id="navbar-tog-btn" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                }
                {isLoged &&
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/settings"><b>Settings</b> <span
                                className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/wallet"><b>Wallet</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/plans"><b>Plans</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/purchase"><b>Purchase</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/history"><b>History</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inventory"><b>Inventory</b></Link>
                        </li>
                    </ul>
                    <LogoutModal/>
                </div>
                }
            </nav>
        );
    }
}
export default Navbar;