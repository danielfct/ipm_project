import React from 'react';
import '../css/colors.css';
import '../css/Inventory.css';

export default class Item extends React.Component {

    constructor(props){
        super(props);
        this.state={
            value:1
        }
    }

    addItem(nome,preco){
        const newItem = {"name":nome,"price":preco,total:this.state.value};
        this.props.addItem(newItem);
        this.props.displayCart();
    }

    changeValue(val){
        this.setState({value:parseInt(val.target.value)});
    }

    render() {
    return (
        <div id="itemContainer">
            <img src={this.props.link} alt="Avatar" className="imageInv"/>
            <div className="overlay overlayInv">
                <div className="text textInv">
                {this.props.nome}
                <br/>
                {this.props.preco}€
                <br/>
                <div className="slidecontainer">
                <input type="range" min="1" max="24" value={this.state.value} className="slider sliderInv" onChange={this.changeValue.bind(this)}/>
                <br/>
                {this.state.value}
                </div>
                <button onClick={this.addItem.bind(this,this.props.nome,this.props.preco)} className="btn btn-info btn-lg" value="Add to Cart">Add to Cart</button>
                </div>
            </div>
        </div>
    );
  }
}