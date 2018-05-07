import React, { Component } from 'react';
import EventsContainer from './EventsContainer';
require('../styles/week_container.css');

export default class WeekContainer extends Component {

    render() {

        let daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
        let renderDayContainer = daysOfWeek.map((day, index) => {
            return ( 
                <div key={index} className="day_container">
                    <div className="day" style={{textAlign:"center"}}>{day}</div>
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