//Probably going to uplift state and therefore maybe also 
//these components to routing.
import Pusher from 'pusher-js';
import axios from 'axios';
// -------------------------------------------------------
import React, { Component } from 'react';
import FormModal from './FormModal';
import LiveTable from './LiveTable';
import SideBar from './SideBar';
require('../styles/app.css');


class App extends Component {

  constructor(props){
    super(props);
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

    let dayAddedTo = {...this.state.timetable}; //copy of array
    dayAddedTo[obj.day].push({
      "eventName": obj.event,
      "startTime": +obj.start,
      "endTime": +obj.end 
    });
    this.setState({
      timetable: dayAddedTo
    });
  }

  render() {
    return (

      // <Provider store={store}>
        <div className="App">
          <SideBar />
          <div className="heading_livetable">
            <h1 className="livetable_heading">Livetable</h1>
            <FormModal onEventAdd={this.handleEventAdd.bind(this)} />
            <LiveTable />
          </div>
        </div>
      // </Provider>
    );
  }
}

export default App;
