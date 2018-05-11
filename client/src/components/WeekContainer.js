import React, { Component } from 'react';
import EventsContainer from './EventsContainer';
require('../styles/week_container.css');

export default class WeekContainer extends Component {


    constructor(props){
        super(props);

        this.calculateDates = this.calculateDates.bind(this);
    }

    calculateDates(daysOfWeek){
        let today = new Date();
        let currentDay = {
            date: today.getDate(),
            month: today.getMonth()+1, //January = 0
            year: today.getFullYear(),
            day: today.getDay()
        };
        let dayWrap = currentDay.day;
        let dates = {};
        for(let i=0;i<7;i++){
            dates[daysOfWeek[dayWrap]] =   `${currentDay.date + i}.${currentDay.month}.${currentDay.year}`
            dayWrap = (dayWrap + 1)%7;
        }
        return dates;

    }
    render() {

        const daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
        let dates = this.calculateDates(daysOfWeek);
        console.log(dates);
        

        let renderDayContainer = daysOfWeek.map((day, index) => {
            return ( 
                    <div key={index} className="day_container">
                        <div className="day">{day} <span className="date">{dates[day]}</span></div>
                        <EventsContainer eventsArray={this.props.timetable[day]} />
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