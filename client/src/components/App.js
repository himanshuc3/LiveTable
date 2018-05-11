import React, { Component } from 'react';
import WeekContainer from './WeekContainer';
// import FormModal from './FormModal';
import CreateScheduleForm from './CreateScheduleForm';
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

  handleEventAdd (event_name, start_time, end_time, day_name) {
    console.log('Inside handleEventAdd: ', event_name, start_time, end_time, day_name);
    let newEvent = {
      "eventName": event_name,
      "startTime": start_time,
      "endTime": end_time,
    }

    let currentTimetableArray;
    if(day_name === "TUESDAY") {
      currentTimetableArray = this.state.timetable.TUESDAY;
    }else if(day_name === "MONDAY") {
      currentTimetableArray = this.state.timetable.MONDAY;
    }else if(day_name === "WEDNESDAY") {
      currentTimetableArray = this.state.timetable.WEDNESDAY;
    }else if(day_name === "THURSDAY") {
      currentTimetableArray = this.state.timetable.THURSDAY;
    }else if(day_name === "FRIDAY") {
      currentTimetableArray = this.state.timetable.FRIDAY;
    }else if(day_name === "SATURDAY") {
      currentTimetableArray = this.state.timetable.SATURDAY;
    }else if(day_name === "SUNDAY") {
      currentTimetableArray = this.state.timetable.SUNDAY;
    }

    currentTimetableArray.push(newEvent);
    this.setState({timetable: this.state.timetable});

  }

  render() {
    return (

      <div className="App">
        <h1 style={{textAlign:"center"}}>Livetable</h1>
        <CreateScheduleForm onEventAdd={this.handleEventAdd.bind(this)} />
        <div className="livetable">
          <WeekContainer timetable = {this.state.timetable}/>
        </div>
      </div>
    );
  }
}

export default App;
