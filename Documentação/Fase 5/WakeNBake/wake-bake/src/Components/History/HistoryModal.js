import React from 'react';
import {Redirect} from 'react-router-dom';

export default class HistoryModal extends React.Component {

    constructor(props){
        super(props);
        this.state={
            redirect: false,
            breads: this.props.transaction.selectedItems,
            transaction: this.props.transaction
        }

        this.checkout = this.checkout.bind(this);
        this.updateSelectedItems = this.updateSelectedItems.bind(this);
        this.changeRedirect=this.changeRedirect.bind(this);
        
    }

    updateSelectedItems(data){
        if(data)
            this.props.socket.emit("updateActiveTransaction",data);
        else
            this.props.socket.emit("updateActiveTransaction",this.state.transaction);
    }

    checkout = () => {
        this.updateSelectedItems(this.state.transaction);
        this.changeRedirect();
    }

    changeRedirect = () => {
        this.setState({redirect:true});
    }


    render() {
        const {redirect, breads} = this.state;
        if(redirect)
            return <Redirect to="/purchase"/>

        return (
            <div id={this.props.id} className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title blue">Info</h4>
                            <button type="button" className="close blue" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                        <ul id="bread-list">
                            {breads.map((bread, i) => <li key={i}> {bread.name + " x" + bread.total} </li>)} 
                        </ul>
                        </div>
                        <div className="modal-footer">
                            <input onClick={this.checkout} type="submit" name="buy-bread" className="btn btn-info btn-lg" value="Checkout" data-dismiss="modal"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}