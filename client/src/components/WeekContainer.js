import React, { Component } from 'react';
import EventsContainer from './EventsContainer';
require('../styles/week_container.css');

export default class WeekContainer extends Component {

    render() {

        let daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
        let renderDayContainer = daysOfWeek.map(day => {
            return ( 
                <div class="day_container">
                    <div className="day">{day}</div>
                    <EventsContainer eventsArray={this.props.timetable[day]} />
                    {/* {this.props.timetable["SUNDAY"]} */}
                </div>
            );
        }); 

        return(
            <div className="week_container">
                {renderDayContainer}
            </div>
        );
    }
}