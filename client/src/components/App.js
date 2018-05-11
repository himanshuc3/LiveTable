import React, { Component } from 'react';
import WeekContainer from './WeekContainer';
// import FormModal from './FormModal';
import SideDayTimeBar from './SideDayTimeBar'
import FormModal from './FormModal';
// import { Provider } from 'react-redux';
// We'll create this in step 3.
// import store from '../store/store';
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
