import React from 'react';

import '../css/BreadBakery.css';
import BreadList from '../../Data/Pao.json';

const NullList = () => (
    <li className="list-group-item">No items selected</li>
);

const SelectedListItem = ({ value, onClick }) => (
    <li className="list-group-item">{value.name + " x" + value.total}<span className="right" onClick={onClick}>&times;</span></li>
);

const AvailableListItem = ({ value, onClick}) => (
    <li onClick={onClick}>{value.name}</li>
);

const SelectedList = ({ items, onItemClick }) => (
    <ul id="selected-items" className="list-group scrollable-menu border">
      {
        items.map((item, i) => <SelectedListItem key={i} value={item} onClick={() => onItemClick(item)} />)
      }
    </ul>
);

const AvailableList = ({items, onItemClick}) => (
    <ul className="max-width dropdown-menu">
        {
            items.map((item, i) => <AvailableListItem key={i} value={item} onClick={() => onItemClick(item)}/>)
        }
    </ul>
);

const PriceTag = ({selectedItems,selectedDates}) => (
    <div>
        <h4>Price</h4>
        <label >Price for 1 order</label>
        <br/>
        <input type="input" value={Math.round(selectedItems.map(item => item.price*item.total).reduce((acc, curr) => acc + curr, 0)*100)/100 + "€"} readOnly></input>
        <br/>
        <label >Price for {selectedDates} order(s) - Number of selected dates</label>
        <br/>
        <input type="input" value={(Math.round((selectedItems.map(item => item.price*item.total).reduce((acc, curr) => acc + curr, 0)*selectedDates)*100)/100) + "€"} readOnly></input>
    </div>
);

export default class Bread extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            availableItems: BreadList.bread,
            selectedItems: [],
            totalPrice: 0.0,
            selectedDates : 1
        };

        this.getSelectedItems = this.getSelectedItems.bind(this);
        this.updateSelectedItems = this.updateSelectedItems.bind(this);

        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.getDates = this.getDates.bind(this);

        this.props.socket.on("getSelectedDate",this.getDates);
        this.props.socket.on("getSelectedItems",this.getSelectedItems);
        this.props.socket.emit("getSelectedItems", null);
        this.props.socket.emit("getSelectedDate",null);
        this.getSelectedItems(false);
    }

    getDates(data){
        let val = data.length;
        if(val === 0){
            val=1;
        }
        
        this.setState({selectedDates:val});
    }

    getSelectedItems = (data) => {
        this.setState({selectedItems: data, totalPrice: data.total});
    }

    updateSelectedItems(data){
        if(data)
            this.props.socket.emit("updateSelectedItems",data);
        else
            this.props.socket.emit("updateSelectedItems",this.state.selectedItems);
    }
    
    addItem = (item) => {
        const {selectedItems, totalPrice} = this.state;

        for(let i in selectedItems){
            if(selectedItems[i].name === item.name){
                item.total = selectedItems[i].total;
                selectedItems.splice(i, 1);
                break;
            }
        }

        item.total +=1;
        const nextState = [...selectedItems, item];
        this.setState({ selectedItems: nextState, totalPrice: totalPrice+item.price });
        this.updateSelectedItems(nextState);
    }
    
    removeItem = function(item){
        const {selectedItems} = this.state;

        for(let i in selectedItems){
            if(selectedItems[i].name === item.name){
                if(item.total === 1){
                    selectedItems.splice(i, 1);
                }else{
                    selectedItems[i].total--;
                }
            }
        }

        const nextState = selectedItems;
        this.setState({ selectedItems: nextState });
        this.updateSelectedItems(nextState);
    }

    render(){
        const { availableItems, selectedItems , selectedDates} = this.state;

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Select your breads!</h3>
                        <div className="dropdown">
                            <button className="max-width btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Breads
                            <span className="caret"></span></button>
                            <AvailableList items={availableItems} onItemClick={this.addItem}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>You have selected...</h4>
                        {
                            selectedItems.length > 0 ? 
                                <SelectedList items={selectedItems} onItemClick={this.removeItem}/> 
                                : 
                                <NullList/>
                        }
                        <br/>
                        <PriceTag selectedItems={selectedItems} selectedDates={selectedDates}/>                
                    </div>
                </div>
            </div>
        );
    }
}