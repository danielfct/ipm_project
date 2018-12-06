import React from 'react';
import '../css/colors.css';
import '../css/Inventory.css';
import Item from './Item';
import Cart from './Cart';
import listaDePao from '../../Data/Pao.json';
import Navbar from '../Navbar/Navbar';

export default class Inventory extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items:[],
            total:0,
            display:"block"
        }
        this.getSelectedItems = this.getSelectedItems.bind(this);
        this.updateSelectedItems = this.updateSelectedItems.bind(this);
        this.props.socket.on("getSelectedItems",this.getSelectedItems);
        this.props.socket.emit("getSelectedItems",null);
        this.getSelectedItems(false);
    }

    getSelectedItems(data){
        this.setState({items:data});
    }

    updateSelectedItems(data){
        if(data)
         this.props.socket.emit("updateSelectedItems",data);
        else
         this.props.socket.emit("updateSelectedItems",this.state.items);
    }

    deleteItem(index,amount){
        const items = Object.assign([], this.state.items);
        items[index].total=amount;
        if(items[index].total<=0){
            items.splice(index,1);
        }
        this.setState({items:items});
        this.totalPrice();
        this.updateSelectedItems(items);
    }

    addItem(i){
        const newItems = Object.assign([], this.state.items);
        for(let index = 0;index<newItems.length;index++){
            if(newItems[index].name===i.name){
                i.total+=newItems[index].total;
                newItems.splice(index,1);
                break;
            }
        }
        newItems.push(i);
        this.setState({items:newItems});
        this.totalPrice();
        this.updateSelectedItems(newItems);
    }

    totalPrice(){
        let newTotal=0;
        for(let i=0; i<this.state.items.length;i++){
            newTotal+=this.state.items[i].price*this.state.items[i].total;
        }
        return Math.round(newTotal * 100) / 100;
    }

    
	handleclick(){
		let val="block";
		if(this.state.display==="block")
			val = "none";
		
		this.setState({display:val});
	}

	displayCart(){
        this.setState({display:"block"});
	}

    render() {
    return (
        <div>
            <Navbar/>
<div id="inventoryContainer">
    <h1 className="my-4 text-center ">Inventory</h1>
    <hr className="hrInv"/>

    <div className="row text-center ">

    {
        listaDePao.bread.map((pao,index) =>{
            return(
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-xs-6">
            <a className="d-block mb-4 h-100">
            <Item link={pao.link} nome={pao.name} preco={pao.price} addItem={this.addItem.bind(this)} displayCart={this.displayCart.bind(this)}/>
            </a>
            </div>
        )
        })  
    }
    </div>
    <hr className="hrInv"/>
    
</div>

<Cart list={this.state.items} deleteItem={this.deleteItem.bind(this)} total={this.totalPrice()} handleclick={this.handleclick.bind(this)} display={this.state.display} />
</div>

    );
  }
}