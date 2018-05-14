import BigCalendar from 'react-big-calendar';
import React, { Component } from 'react';
import moment from 'moment';
require('react-big-calendar/lib/css/react-big-calendar.css');
require('../styles/live_table.css');

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

export default class LiveTable extends Component{

 
    render(){
    

        return(
            <div className="livetable_container">
                <BigCalendar
                    selectable
                    events={this.props.events}
                    defaultView="week"
                    toolbar = {false}
                    views={{
                        day: true,
                        week: true
                      }}
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={slotInfo =>
                        alert(
                        `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                            `\nend: ${slotInfo.end.toLocaleString()}` +
                            `\naction: ${slotInfo.action}`
                        )
                    }
                    className="live_table"
                />
            </div>
        );
    }
    
}

