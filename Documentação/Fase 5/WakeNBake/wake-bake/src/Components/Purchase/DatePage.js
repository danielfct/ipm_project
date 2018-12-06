import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const NullList = () => (
    <li className="list-group-item">No items selected</li>
);

const SelectedItem = ({item, onItemClick}) => (
    <li className="list-group-item">{item.date}<span className="right" onClick={() => onItemClick(item)}>&times;</span></li>
);

const SelectedList = ({ items, onItemClick }) => (
    <ul id="selected-items" className="list-group scrollable-menu border">
        {
            items.map((item, i) => <SelectedItem key={i} item={item} onItemClick={onItemClick}/>)
        }
    </ul>
);

export default class DatePage extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
          selectedDays: [],
        };

        this.handleDayClick = this.handleDayClick.bind(this);
        this.removeItem = this.removeItem.bind(this);
        
        this.updateDate = this.updateDate.bind(this);

        this.props.socket.on("getSelectedDate",this.getSelectedDate);
        this.props.socket.emit("getSelectedDate", null);
    }

    getSelectedDate = (data) => {
        this.setState({selectedDays: data});
    }

    updateDate = (data) => {
        if(data)
            this.props.socket.emit("updateDate",data);
        else
            this.props.socket.emit("updateDate",this.state.selectedDays);
    }
      
    handleDayClick(day, { selected }) {
       let randomHour = () => {
            let hour = String(Math.floor(Math.random() * 12 + 8));
            let minute = String(Math.floor(Math.random() * 60));
    
            if(minute.length == 1)
                minute = "0" + minute;
    
            return hour + ":" + minute;
    
        };

        let now = new Date();

        if(day < now){
            if(day.getDate() != now.getDate()){
                alert("Date is in the past!");
                return;
            }
        }

        const { selectedDays } = this.state;
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                selectedDay.date === day.toLocaleDateString()
            );
            selectedDays.splice(selectedIndex, 1);
        }else {
            selectedDays.push({"date": day.toLocaleDateString(), "time": randomHour()});
        }
        this.setState({ selectedDays });
        this.updateDate(selectedDays);
    }
    
    removeItem = function(day){
        const {selectedDays} = this.state;
    
        const selectedIndex = selectedDays.findIndex(selectedDay => 
                selectedDay.date === day.date
        );
        selectedDays.splice(selectedIndex, 1);
        this.setState({ selectedDays});
        this.updateDate(selectedDays);

    }


    render(){
        const { selectedDays } = this.state;

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {/** <DayPicker fromMonth={new Date()} selectedDays={this.state.selectedDay} onDayClick={this.handleDayClick}/>*/}              
                        <DayPicker
                            fromMonth={new Date()}
                            selectedDays={this.state.selectedDays.map((day) => new Date(day.date))}
                            onDayClick={this.handleDayClick}
                        />
                    </div>
                    <div className="col-md-6">
                        <h3>You have selected...</h3>
                        {
                            selectedDays.length > 0 ?
                            <SelectedList items={selectedDays} onItemClick={this.removeItem}/>
                            :
                            <NullList/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}