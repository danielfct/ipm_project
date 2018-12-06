import React from 'react';
import '../css/colors.css';
import '../css/Cart.css';
import { Redirect } from "react-router-dom";

export default class Cart extends React.Component {

	constructor(props){
		super(props);
		this.state={
			redirect:false,
			value:1,
			displayDelete:"none",
			index:0,
			item:[0,1,2],
			showCheckout: true
		}
	}

	deleteItem(index,val){
		if(val == 0)
			this.props.deleteItem(index,0);
		else
			this.props.deleteItem(index,this.state.value);
		this.handleclick();
		this.setState({displayDelete:"none"});
		this.setState({showCheckout: true});
	}

	handleclick(){
		let val="block";
		if(this.props.display==="block")
			val = "none";
		this.props.handleclick(val);
	}
	
    changeValue(val){
        this.setState({value:parseInt(val.target.value)});
	}
	
	chooseDelete(index){
		this.setState({value:this.props.list[index.index].total});
		this.setState({item:this.props.list[index.index]});
		if(this.props.list[index.index].total===1){
			this.setState({value:0});
			this.deleteItem(index.index,0);
			this.handleclick();
		}else{
		this.setState({index:index.index});
		this.handleclick();		
		this.setState({displayDelete:"block"});
		}
        this.setState({showCheckout: false});
	}

	changeRedirect(){
		this.setState({redirect:true});
	}

    render() {		
        const {redirect, showCheckout} = this.state;
		if(redirect)
            return<Redirect to="/purchase"/>
        
    return (
				<div className="container cartContainner">
					<h4 onClick={this.handleclick.bind(this)} >Cart <a className="aCart" href="#"><img  onClick={this.handleclick.bind(this)} src="https://imgur.com/zGb7ypA.png" style={{height:"20 px",width:"20px"}}/></a><span className="price "><i className="fa fa-shopping-cart"></i></span></h4>
					<div className="listItems" style={{display: this.props.display}}>
					{
						this.props.list.map((item,index)=>{
							return(
								<p key={index}><a className="aCart">{item.name}(x{item.total})</a> <span className="price ">{Math.round(item.price*item.total*100)/100}€</span>
									<button key={index} type="button" onClick={this.chooseDelete.bind(this,{index})} className="close blue closeCart">&times;</button></p>
							)	
						})
					}
					<hr className="hrCart"/>
					<p >Total <span className="price" ><b>{this.props.total}€</b></span></p>
					</div>
					<div style={{display:this.state.displayDelete}}>
					<div className="slidecontainer">
					Update Amount of {this.state.item.name}
                		<input type="range" min="0" max={this.state.item.total} value={this.state.value} className="slider" onChange={this.changeValue.bind(this)}/>
                		<br/>
						{this.state.value}
						<br/>
						<button className="btn btn-info btn-lg" onClick={this.deleteItem.bind(this,this.state.index)}>Edit</button>
              			</div>
					</div>
					{showCheckout && <button onClick={this.changeRedirect.bind(this)} className="btn btn-info btn-lg">CheckOut</button>}
				</div>
    );
  }
}