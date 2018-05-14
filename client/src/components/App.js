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
    let events = [
      {
        id: 0,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
      },
      {
        id: 1,
        title: 'One more',
        start: new Date(new Date().setHours(new Date().getHours() - 2)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
      },
      {
        id: 2,
        title: 'One more',
        start: new Date(new Date().setHours(new Date().getHours() - 1)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
      },
    ];
    this.state = {
          events: events
    };
  }

  componentDidMount(){
    // Pusher.logToConsole = true;
    // const pusher = new Pusher('bd15491c4e703db76122', {
    //   cluster: 'ap2',
    //   encrypted: true
    // });
    // const channel = pusher.subscribe('timetable');
    // channel.bind('addEvent', data =>{
    //   this.handleEventAdd(data);
    // });
  }
  handleEventAdd (obj) {
    console.log(obj);

    console.log(moment().day("Sunday"));

    // let dayAddedTo = [...this.state.events]; //copy of array
    // dayAddedTo.push({
    //   id: dayAddedTo.length,
    //   title: obj.event,
    //   start:,
    //   end: 
    // });

    // this.setState({
    //   events: dayAddedTo
    // });
  }

  render() {
    return (

      // <Provider store={store}>
        <div className="App">
          <SideBar />
          <div className="heading_livetable">
            <h1 className="livetable_heading">Livetable</h1>
            <FormModal onEventAdd={this.handleEventAdd.bind(this)} />
            <LiveTable events={this.state.events} />
          </div>
        </div>
      // </Provider>
    );
  }
}

export default App;
