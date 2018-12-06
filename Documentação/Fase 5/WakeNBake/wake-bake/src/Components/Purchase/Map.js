import React from 'react';
import '../css/Purchase.css';
import { ReactBingmaps } from 'react-bingmaps';
import bakeries from '../../Data/DefaultBakery.json';

export default class Map extends React.Component{

    constructor(props){
        super(props);
        this.props.socket.on('bakeries',this.updateBakeries.bind(this));
        this.state = {
            coord: [],
            bakery: null
        };

        this.getCoords = this.getCoords.bind(this);
        this.props.socket.on("getCoords",this.getCoords);
        this.props.socket.emit("getCoords", null);
    }

    getCoords(data){
        this.setState({coord: data});
    }

    updateBakeries(data){
        this.setState({bakery:data});

    }

    loadBakery(){
        this.props.socket.emit('getBakeries',null);
    }

    changeBakery(index){
        this.props.socket.emit('writeJson', index);
        this.loadBakery();
    }

    callBackFunction(){
        const {coord, bakery} = this.state;
        let baked = bakery!=null ? bakery.bakeries : bakeries.bakeries;
        for(let i in baked){
            baked[i].addHandler =  {type : "click", callback: () => {this.changeBakery(i)}}
            }
        if(this.state.coord.length > 0) {
            baked = [...baked, {"location": coord, "option": {"color": "green"}}];

        }
        return baked;
    }
    render(){
        return(
            <div>
                <ReactBingmaps style={{position:"absolute"}}
                    bingmapKey = "AtclCh9ppxuVIASvR6HATYx1XiThvLiriI8SWhBIQNB6geEwO7tzAGx3CxgYOOWe" 
                    center = {[38.6610, -9.2058]}
                    zoom={14}
                    pushPins = { this.callBackFunction() }
                    regularPolygons ={ this.state.bakery!=null ? this.state.bakery.areas : bakeries.areas }

                > 
                </ReactBingmaps>
            </div>
        );
    }
}