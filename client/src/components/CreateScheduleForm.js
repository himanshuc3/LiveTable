import React, { Component, createRef } from 'react';
// import ReactModal from 'react-modal';
require('../styles/form_modal.css');



export default class CreateScheduleForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: false
        };

        this.textInput = createRef();
        this.start = createRef();
        this.end = createRef();
        this.day = createRef();

        this.OpenModal = this.OpenModal.bind(this);
        this.CloseModal = this.CloseModal.bind(this);
    }

    OpenModal () {
        this.setState({ show: true });
    }
      
    CloseModal () {
        this.setState({ show: false });
    }

    handleSubmit(e) {
        e.preventDefault();
        var event_name = this.textInput.current.value;
        var start_time = this.start.current.value;
        var end_time = this.end.current.value;
        var day_name = this.day.current.value;
        console.log(event_name, start_time, end_time, day_name);

        this.props.onEventAdd(event_name, start_time, end_time, day_name);
        event_name = "";
        start_time = "";
        end_time = "";
        day_name = "";
    }


    render() {
        return (
                <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>Event Name: </label>
                        <input type="text" ref={this.textInput} />

                        <label>Start Time: </label>
                        <input type="time" ref={this.start} />

                        <label>End Time: </label>
                        <input type="time" ref={this.end} />

                        <label>Day: </label>
                        <input type="text" ref={this.day} />

                        <button type="submit">Submit</button>
                    </form>

                </div>
        );
    }


  }