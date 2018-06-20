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
import SearchBox from './SearchBox'
import logout from '../assets/images/logout.svg'
import notification from '../assets/images/notification.svg'
import plus from '../assets/images/plus.svg'
require('../styles/app.css');
const keys = require('../config/keys')


class App extends Component {

  constructor(props){
    super(props);
    let events = [
    {
      id: 0,
      title: 'Today',
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
]
    this.state = {
          events: events,
          numberOfEvents: 1
    };
  }

  componentDidMount(){
    const pusher = new Pusher(keys.pusherKey, {
      cluster: keys.pusherCluster,
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
    let dayAddedTo = [...this.state.events]; //copy of events object state
    dayAddedTo.push({
      id: this.state.numberOfEvents,
      title: obj.event,
      start: new Date((new Date()).getFullYear(),(new Date()).getMonth(), parseInt(obj.date), parseInt(obj.start.substring(0,2)), parseInt(obj.start.substring(2))),
      end: new Date((new Date()).getFullYear(),(new Date()).getMonth(), parseInt(obj.date), parseInt(obj.end.substring(0,2)), parseInt(obj.end.substring(2))),
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
          <div className="right_livetable_container">
            <header className="calendar_header">
              <SearchBox />
              <div className="header_icons">
                <img src={notification} alt="notification" />
                <img src={logout} alt="Logout" />
              </div>
            </header>
            <div className="app_content">
              <div className="scheduler_add">
                <h3>Timetable</h3>
                {/* <img src={plus} alt="Add" /> */}
                <FormModal onEventAdd={this.handleEventAdd.bind(this)} />
              </div>
              <LiveTable events={this.state.events} />
            </div>
          </div>
        </div>
      // </Provider>
    );
  }
}

export default App;
