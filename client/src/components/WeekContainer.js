import React, { Component } from 'react';
import EventsContainer from './EventsContainer';
import SideDayTimeBar from './SideDayTimeBar'
require('../styles/week_container.css');

export default class WeekContainer extends Component {

    render() {

        let daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
        let renderDayContainer = daysOfWeek.map(day => {
            return ( 
                    <div key={index} className="day_container">
                        <div className="day">{day}</div>
                        <EventsContainer eventsArray={this.props.timetable[day]} />
                    </div>
            );
        }); 

        return(
            <div className="week_container">
                <SideDayTimeBar />
                {renderDayContainer}
            </div>
        );
    }
}