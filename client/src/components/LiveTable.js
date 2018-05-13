import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React, { Component } from 'react';
import events from './events';
require('react-big-calendar/lib/css/react-big-calendar.css');
require('../styles/live_table.css');

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

export default class LiveTable extends Component{
 
    render(){
    
        let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

        return(
            
            <div>
                <BigCalendar
                    events={events}
                    views={allViews}
                    step={60}
                    showMultiDayTimes
                    defaultDate={new Date(2015, 3, 1)}
                    className="live_table"
                />
            </div>
        );
    }
    
}

