import React from 'react';
import '../css/history.css';
import HistoryBox from './HistoryBox';
import HistoryModal from './HistoryModal';
import Navbar from '../Navbar/Navbar';



export default class History extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            transactions: []
        };

        this.getTransactions = this.getTransactions.bind(this);

        this.props.socket.on("getTransactions",this.getTransactions);
        this.props.socket.emit("getTransactions", null);
    }


    getTransactions = (data) => {
        this.setState({transactions: data});
    }

    render() {
        const {transactions} = this.state;

        return (
            
            <div className="container">
                <Navbar/>
                <div className="spacer"/>
                <h2 className="center">Transaction History</h2>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div id="tracking-pre"></div>
                        <div id="tracking">
                            <div className="text-center tracking-status-header">
                                <p className="tracking-status text-tight">Buy's</p>
                            </div>
                            <div className="tracking-list">

                                {transactions.map(
                                    (transaction, i) =>
                                        <div id={i} key={i} data-toggle="modal" data-target={"#history-modal-"+i}>
                                            <div className="hover-effect" >
                                                <HistoryBox transaction={transaction}/>
                                            </div>
                                            <hr className="hr-spacer"/>
                                        </div> 
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
                {transactions.map(
                    (transaction, i) =>
                        <HistoryModal socket={this.props.socket} key={i} id={"history-modal-"+i} transaction={transaction}/>
                )}
            </div>

        );
    }
}