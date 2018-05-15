//Probably going to uplift state and therefore maybe also 
//these components to routing.
import Pusher from 'pusher-js';
import axios from 'axios';
// -------------------------------------------------------
import moment from 'moment';
import React, { Component } from 'react';
import FormModal from './FormModal';
import LiveTable from './LiveTable';
import SideBar from './SideBar';
require('../styles/app.css');


class App extends Component {

  constructor(props){
    super(props);
    let events = {
      sunday:[

      ],
      monday: [
      ],
      tuesday: [
      ],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: []
    };
    this.state = {
          events: events,
          numberOfEvents: 0
    };
  }

  componentDidMount(){
    const pusher = new Pusher('bd15491c4e703db76122', {
      cluster: 'ap2',
      encrypted: true
    });
    const channel = pusher.subscribe('timetable');
    channel.bind('addEvent', data =>{
      this.handleEventAdd(data);
    });
    channel.bind('peopleAdd', username =>{
      console.log("inside peopleAdd channel bind");
    });
    channel.bind('blockEvent', data =>{
      this.blockEvent(data);
    });
  }

  handleEventAdd (obj) {
    let dayAddedTo = {...this.state.events}; //copy of events object state
    dayAddedTo[obj["day"].toLowerCase()].push({
      id: this.state.numberOfEvents + 1,
      name: obj.event,
      startTime: moment(`2018-02-23T${obj.start.substring(0,2)}:${obj.start.substring(2)}:00`),
      endTime: moment(`2018-02-23T${obj.end.substring(0,2)}:${obj.end.substring(2)}:00`)
    });

    this.setState({
      events: dayAddedTo,
      numberOfEvents: this.state.numberOfEvents + 1
    });
  }

  blockEvent(obj){
    console.log(obj);
    let dayAddedTo = {...this.state.events};
    let start1 = obj.start.substring(0,2),
        start2 = obj.start.substring(2),
        end1 = obj.end.substring(0,2),
        end2 = obj.end.substring(2);    
    let arrOfDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    
    for(let day of arrOfDays){
      dayAddedTo[day].push({
        id: this.state.numberOfEvents + 1,
        name: "Blocked",
        startTime: moment(`2018-02-23T${start1}:${start2}:00`),
        endTime: moment(`2018-02-23T${end1}:${end2}:00`)
      });
    }
    

    this.setState({
      events: dayAddedTo,
      numberOfEvents: this.state.numberOfEvents + 1
    });

  }

  render() {
    return (

      // <Provider store={store}>
        <div className="App">
          <SideBar username={this.state.username} onBlock={this.blockEvent.bind(this)}/>
          <div className="heading_livetable">
            <h1 className="livetable_heading">Livetable {this.props.username}</h1>
            <FormModal onEventAdd={this.handleEventAdd.bind(this)} />
            <LiveTable events={this.state.events} />
          </div>
        </div>
      // </Provider>
    );
  }
}

export default App;
