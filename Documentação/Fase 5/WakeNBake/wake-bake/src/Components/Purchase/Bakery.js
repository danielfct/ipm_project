import React from 'react';

import '../css/BreadBakery.css';
import BakeryList from '../../Data/DefaultBakery.json';

const NullList = () => (
    <li className="list-group-item">No items selected</li>
);

const SelectedListItem = ({ value, onClick }) => (
    <li className="list-group-item">{value.name}<span className="right" onClick={onClick}>&times;</span></li>
);

const AvailableListItem = ({ value, onClick}) => (
    <li onClick={onClick}>{value.name}</li>
);

const AvailableList = ({items, onItemClick}) => (
    <ul className="max-width dropdown-menu">
        {
            items.map((item, i) => <AvailableListItem key={i} value={item} onClick={() => onItemClick(item)}/>)
        }
    </ul>
);

export default class Bakery extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            availableItems: BakeryList.bakeries,
            selectedItems: {"name":"Padaria Pascoa","index":2},
            isItem : true
        };
        
        this.updateMe = this.updateMe.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
        
        this.props.socket.on("changeBakeryTab",this.updateMe);
    }
    
    updateMe (data){
        this.setState({selectedItems:data,isItem:true});
    }

    addItem = (item) => {
        this.setState({ selectedItems: item, isItem: true});
        this.props.socket.emit("writeJson",item.index);
    }
    
    removeItem = function(item){
        const nextState = {};
        this.setState({ selectedItems: nextState, isItem: false });
        this.props.socket.emit("writeJson",-1);
    }

    render(){
        const { availableItems, selectedItems, isItem } = this.state;

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Select your bakeries!</h3>
                        <div className="dropdown">
                            <button className="max-width btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Bakeries
                            <span className="caret"></span></button>
                            <AvailableList items={availableItems} onItemClick={this.addItem}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>You have selected...</h4>
                        {
                            isItem ? 
                                <SelectedListItem value={selectedItems} onClick={() => this.removeItem(selectedItems)} />
                                : 
                                <NullList/>
                        }
                    </div>
                </div>
            </div>
        );
                    
    }
}