import React from 'react';
import axios from "axios";

import '../css/BreadBakery.css';
import AddressList from "../../Data/Addresses.json";

const NullList = () => (
    <li className="list-group-item">No items selected</li>
);

const AvailableListItem = ({ value, onClick}) => (
    <li onClick={onClick}>{value}</li>
);

const SelectedList = ({ item, onItemClick }) => (
    <ul id="selected-items" className="list-group scrollable-menu border">
      <li className="list-group-item">{item}<span className="right" onClick={onItemClick}>&times;</span></li>
    </ul>
);

const AvailableList = ({items, onItemClick}) => (
    <ul className="max-width dropdown-menu">
        {
            items.map((item, i) => <AvailableListItem key={i} value={item} onClick={onItemClick}/>)
        }
    </ul>
);

export default class Address extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            availableItems: [],
            selectedItem: '',
            inputValue: '',
        };

        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getAdress = this.getAdress.bind(this);
        this.updateSelected = this.updateSelected.bind(this);
        this.updateCoords = this.updateCoords.bind(this);
        
        this.props.socket.on("getAdress",this.getAdress);
        this.props.socket.emit("getAdress",null);
        this.handleAddress = this.handleAddress.bind(this);
    }

    updateCoords(data){
        this.props.socket.emit("updateCoords", data);
    }

    getAdress(data){
        this.setState({availableItems:data.adresses , selectedItem:data.selectedAddress});
    }

    async handleAddress(data){
        const url = `http://dev.virtualearth.net/REST/v1/Locations?countryRegion=Portugal&
        &adminDistrict=Almada
        locality=Monte da Caparica
        &AddressLine=${data}
        &&key=AtclCh9ppxuVIASvR6HATYx1XiThvLiriI8SWhBIQNB6geEwO7tzAGx3CxgYOOWe`;

        const req = axios.get(url)
            .then(response =>{
                let coord = [response.data.resourceSets[0].resources[0].point.coordinates[0],
                    response.data.resourceSets[0].resources[0].point.coordinates[1]]
                /*{"lat":response.data.resourceSets[0].resources[0].point.coordinates[0],
                    "lon":response.data.resourceSets[0].resources[0].point.coordinates[1]};*/

                this.updateCoords(coord);

                /*this.setState({coord: {"lat":response.data.resourceSets[0].resources[0].point.coordinates[0],
                        "lon":response.data.resourceSets[0].resources[0].point.coordinates[1]}})
                this.setState({lat: response.data.resourceSets[0].resources[0].point.coordinates[0]});
                this.setState({lon: response.data.resourceSets[0].resources[0].point.coordinates[1]})*/
            });
    }
    
    addItem = (e) => {
        const nextState = e.target.innerHTML;
        this.setState({ selectedItem: nextState });
        this.updateSelected(nextState,false);
    }
    
    removeItem = function(e){
        const nextState = '';
        this.setState({ selectedItem: nextState });
         this.updateSelected(nextState,false);
    }

    updateSelected(sel,flag){
        this.props.socket.emit("updateAddress",{"selectedAddress": sel,"flag":flag});
        this.handleAddress(sel);
    }

    onChange = (e) => {
        let sel = document.getElementById('address-input').value;
        this.setState({ selectedItem: sel })
        this.updateSelected(sel,true);
        this.handleAddress();
    }

    render(){
        const { availableItems, selectedItem} = this.state;

        return(
            <div className="container">
                
                    <h3>Pick an address!</h3>
                    <div className="dropdown">
                        <button className="max-width btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Addresses
                        <span className="caret"></span></button>
                        <AvailableList items={availableItems} onItemClick={this.addItem}/>
                    </div>
                    <br/>
                    <h3>Or write your own!</h3>
                    <input type="text" name="address-input" id="address-input" className="form-control" placeholder="..."></input>
                    <br/>
                    <button onClick={this.onChange} className="btn btn-primary" type="button">Add Your Own</button>
                    <br/>
                    <br/>
                    <br/>
                    <h4>Selected address</h4>
                    {
                        selectedItem !== '' ?
                        <SelectedList item={selectedItem} onItemClick={this.removeItem} />
                        :
                        <NullList/>
                    }
            </div>
        );
    }
}