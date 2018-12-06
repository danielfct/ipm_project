import React, { Component } from 'react';
import "../css/Plans.css";
import Navbar from "../Navbar/Navbar";
import PlansButtons from "./PlansButtons";
import { Redirect } from "react-router-dom";

class  Plans extends Component{
    constructor(props){
        super(props);
        this.state = {
            plan: "0",
            redirect : false
        };

        this.getPlan = this.getPlan.bind(this);
        this.props.socket.on("getPlan",this.getPlan);
        this.props.socket.emit("getPlan",null);
    }

    getPlan(data){
        this.setState({plan:data});
        this.handleChange(data);
    }

    updatePlan(){
        this.props.socket.emit("updatePlan",this.state.plan);
        this.setState({redirect:true});
    }

    handleChange(plan){
        this.setState({plan: plan});
    }

    render(){
        var selectedPlan = this.state.plan;
        var planView;

        if(selectedPlan === "9.99€") {
            planView = <p className="description">With this plan you can buy bread 3 times per week.</p>
        }
        else if(selectedPlan === "19.99€"){
            planView = <p className="description">With this plan you can buy bread 5 times per week and you will receive a complementary “Pastel de Nata” per order</p>
        }
        else if(selectedPlan === "24.99€"){
            planView = <p className="description">With this plan you can buy bread 7 times per week and you will receive two complementary “Pastéis de Nata” per order</p>
        }

        const {redirect} = this.state;
        if(redirect){
            return<Redirect to="/inventory"/>
        }
        return(
            <div>
                <Navbar/>
                <div className="container" id="content">
                    <h3 id="headline">Available plans:</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <PlansButtons plan={this.state.plan} handleChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className="col-md-6 align-self-center" id="plans-description">
                            {planView}
                        </div>
                    </div>
                    <div id="sub-btn-div">
                        <button type="button" onClick={this.updatePlan.bind(this)} className="btn btn-default btn-md">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Plans;