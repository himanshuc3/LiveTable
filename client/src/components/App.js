//Probably going to uplift state and therefore maybe also 
//these components to routing.
import Pusher from 'pusher-js';
import axios from 'axios';
// -------------------------------------------------------
import React, { Component } from 'react';
import WeekContainer from './WeekContainer';
import SideDayTimeBar from './SideDayTimeBar'
import FormModal from './FormModal';
require('../styles/main.css');


class App extends Component {

  constructor(props){
    super(props);
    
    let data = {
      "SUNDAY":[
        {
          "eventName": "First Event",
          "startTime":11,
          "endTime": 12,
        },
        {
          "eventName": "Second Event",
          "startTime":1,
          "endTime": 3,
        },
        {
          "eventName": "Third Event",
          "startTime":2,
          "endTime": 3,
        }
      ],
      "MONDAY":[
        {
          "eventName": "Another Event",
          "startTime":0,
          "endTime": 1,
        },
        {
          "eventName": "Another Event",
          "startTime":0,
          "endTime": 2,
        },
        {
          "eventName": "First Event",
          "startTime":11,
          "endTime": 17,
        }
      ],
      "TUESDAY":[
        {
          "eventName": "First Event",
          "startTime":11,
          "endTime": 12,
        }
      ],
      "WEDNESDAY":[
        {
          "eventName": "First Event",
          "startTime":11,
          "endTime": 12,
        }
      ],
      "THURSDAY":[
        {
          "eventName": "First Event",
          "startTime":11,
          "endTime": 12,
        }
      ],
      "FRIDAY":[
        {
          "eventName": "First Event",
          "startTime":11,
          "endTime": 12,
        }
      ],
      "SATURDAY":[
        {
          "eventName": "First Event",
          "startTime":11,
          "endTime": 12,
        }
      ],

    }

    this.state = {
      timetable: data
    };
  }

  componentDidMount(){
    Pusher.logToConsole = true;
    const pusher = new Pusher('bd15491c4e703db76122', {
      cluster: 'ap2',
      encrypted: true
    });
    const channel = pusher.subscribe('timetable');
    channel.bind('addEvent', data =>{
      this.handleEventAdd(data);
    });
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
          <h1 className="livetable_heading">Livetable</h1>
          <FormModal onEventAdd={this.handleEventAdd.bind(this)} />
          <SideDayTimeBar />
          <div className="livetable">
            <WeekContainer timetable = {this.state.timetable}/>
          </div>
        </div>
      // </Provider>
    );
  }
}

export default App;
