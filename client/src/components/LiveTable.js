import React, {Component} from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
require('../styles/live_table.css')

BigCalendar.momentLocalizer(moment)

export default class LiveTable extends Component{


    componentDidMount(){
        console.log(document.getElementsByClassName("rbc-btn-group")[0])
    }
    render(){

        return(
            <div className="live_table_container">
                    <BigCalendar
                events={this.props.events}
                views={{
                    month: true,
                    week: true,
                    day: true,
                    agenda: true
                }}
                step={30}
                className="big_calendar"
                showMultiDayTimes
                defaultDate = {new Date()}
                />
            </div>
    )

    }
}