import React, { Component } from 'react';
import "../css/PlansButtons.css";

class  PlansButtons extends Component{
    constructor(props) {
        super(props);

        this.onPlanChange = this.onPlanChange.bind(this);
    }

    onPlanChange(event){
        this.props.handleChange(event.target.value);
    }

    render(){
        switch(parseInt(this.props.plan)){
            case 9:
            return(
                <form className="form" id="plans-btns" onChange={this.onPlanChange.bind(this)}>
                    <div className="inputGroup">
                        <input className="plans-input" id="radio1" name="plan-radio" defaultChecked type="radio" value="9.99€"/>
                        <label className="label-class" htmlFor="radio1"><b>9.99€</b></label>
                    </div>
                    <div className="inputGroup">
                        <input className="plans-input" id="radio2" name="plan-radio"  type="radio" value="19.99€"/>
                        <label className="label-class" htmlFor="radio2"><b>19.99€</b></label>
                    </div>
                    <div className="inputGroup">
                        <input className="plans-input" id="radio3" name="plan-radio" type="radio" value="24.99€"/>
                        <label className="label-class" htmlFor="radio3"><b>24.99€</b></label>
                    </div>
                </form>
            );
                break;
            case 19:
            return(
                <form className="form" id="plans-btns" onChange={this.onPlanChange.bind(this)}>
                    <div className="inputGroup">
                        <input className="plans-input" id="radio1" name="plan-radio" type="radio" value="9.99€"/>
                        <label className="label-class" htmlFor="radio1"><b>9.99€</b></label>
                    </div>
                    <div className="inputGroup">
                        <input className="plans-input" id="radio2" name="plan-radio" defaultChecked type="radio" value="19.99€"/>
                        <label className="label-class" htmlFor="radio2"><b>19.99€</b></label>
                    </div>
                    <div className="inputGroup">
                        <input className="plans-input" id="radio3" name="plan-radio" type="radio" value="24.99€"/>
                        <label className="label-class" htmlFor="radio3"><b>24.99€</b></label>
                    </div>
                </form>
            );
            break;
            case 24:
            return(
                <form className="form" id="plans-btns" onChange={this.onPlanChange.bind(this)}>
                    <div className="inputGroup">
                        <input className="plans-input" id="radio1" name="plan-radio" type="radio" value="9.99€"/>
                        <label className="label-class" htmlFor="radio1"><b>9.99€</b></label>
                    </div>
                    <div className="inputGroup">
                        <input className="plans-input" id="radio2" name="plan-radio"  type="radio" value="19.99€"/>
                        <label className="label-class" htmlFor="radio2"><b>19.99€</b></label>
                    </div>
                    <div className="inputGroup">
                        <input className="plans-input" id="radio3" name="plan-radio" defaultChecked type="radio" value="24.99€"/>
                        <label className="label-class" htmlFor="radio3"><b>24.99€</b></label>
                    </div>
                </form>
            );
            break;
            default:
            return(
                <form className="form" id="plans-btns" onChange={this.onPlanChange.bind(this)}>
                    <div className="inputGroup">
                        <input className="plans-input" id="radio1" name="plan-radio" type="radio" value="9.99€"/>
                        <label className="label-class" htmlFor="radio1"><b>9.99€</b></label>
                    </div>
                    <div className="inputGroup">
                        <input className="plans-input" id="radio2" name="plan-radio"  type="radio" value="19.99€"/>
                        <label className="label-class" htmlFor="radio2"><b>19.99€</b></label>
                    </div>
                    <div className="inputGroup">
                        <input className="plans-input" id="radio3" name="plan-radio" type="radio" value="24.99€"/>
                        <label className="label-class" htmlFor="radio3"><b>24.99€</b></label>
                    </div>
                </form>
            );
            break;
        }
    }
}

export default PlansButtons;