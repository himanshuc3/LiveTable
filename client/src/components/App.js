import React, { Component } from 'react';
import WeekContainer from './WeekContainer';
import FormModal from './FormModal';
require('../styles/main.css');

class App extends Component {

  constructor(props){
    super(props);
    let data ={
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

  render() {
    return (

      <div className="App">
        <h1 style={{textAlign:"center"}}>Livetable</h1>
        <FormModal />
        <div class="livetable">
          <WeekContainer timetable = {this.state.timetable}/>
        </div>
      </div>
    );
  }
}

export default App;
