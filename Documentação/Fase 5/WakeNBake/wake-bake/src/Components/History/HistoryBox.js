import React from 'react';
import '../css/history.css';

export default class HistoryBox extends React.Component {

    constructor(props){
        super(props);
        this.state={
            transaction: this.props.transaction

        }
    }



    render() {
        const {transaction} = this.state;

        return (
            <div>
                <div className="tracking-item">
                <div className="tracking-icon status-delivered">
                    <svg className="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                    </svg>
                </div>
                <div className="tracking-date">
                    <p>{transaction.selectedDate.length > 1 ? transaction.selectedDate[0].date + "..." : transaction.selectedDate[0].date}
                    <span>{transaction.selectedDate[0].time}</span>
                    </p>
                </div>
                <div className="tracking-content">
                    <p>{transaction.selectedItems.length > 1 ? transaction.selectedItems[0].name + "..." : transaction.selectedItems[0].name}
                    <span>{transaction.selectedBakery.name}</span>
                    </p>
                </div>
            </div>
        </div>
        );
    }
}