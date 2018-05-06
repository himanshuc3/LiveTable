import React, { Component } from 'react';
import DayContainer from './DayContainer';

export default class WeekContainer extends Component {

    render() {

        let daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
        return(
            <div className="week_container">
                {daysOfWeek.map(day =>{
                    
                })}
            </div>
        );
    }
}