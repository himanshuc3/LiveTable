import React, { Component } from 'react';
import moment from 'moment';
import Timetable from 'react-timetable-events'
require('../styles/live_table.css');

export default class LiveTable extends Component{

    constructor(props){
        super(props);
    }


    render(){

        return(
            <div className="livetable_container">
                <Timetable 
                    events={this.props.events}
                    hoursInterval= {[0,24]}
                />
            </div>
        );
    }
    
}



