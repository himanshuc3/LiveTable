import React, { Component, createRef } from 'react';
import Rodal from 'rodal';
import { Control, Form, actions } from 'react-redux-form';
// include styles
import 'rodal/lib/rodal.css';
require('../styles/form_modal.css');


export default class FormModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: false,
            visible: false
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
        // dispatch(actions.change('event.eventName', event.eventName ));
        // var event_name = this.textInput.current.value;
        // var start_time = this.start.current.value;
        // var end_time = this.end.current.value;
        // var day_name = this.day.current.value;
        // console.log(event_name, start_time, end_time, day_name);

        // this.props.onEventAdd(event_name, start_time, end_time, day_name);
        // event_name = "";
        // start_time = "";
        // end_time = "";
        // day_name = "";
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }


    render() {
        return (
                // <div>
                //     <form onSubmit={this.handleSubmit.bind(this)}>
                //         <label>Event Name: </label>
                //         <input type="text" ref={this.textInput} />

                //         <label>Start Time: </label>
                //         <input type="time" ref={this.start} />

                //         <label>End Time: </label>
                //         <input type="time" ref={this.end} />

                //         <label>Day: </label>
                //         <input type="text" ref={this.day} />

                //         <button type="submit">Submit</button>
                //     </form>

                // </div>
                <div className="form_button_container">
                    <button onClick={this.show.bind(this)}>Add Event</button>
                    <Rodal 
                        visible={this.state.visible} 
                        onClose={this.hide.bind(this)}
                        width={400}
                        height={400}
                        className="modal"
                    >
                        <header>
                            <div className="modal_heading">
                                AN EVENT
                            </div>
                        </header>
                        <div className="form_container">
                            {/* React form using redux and react-form library. */}
                            {/* Redux thunk is used to delay the action calling */}
                            {/* It is not required in latest react form version. */}
                            <Form
                                model="event"
                                onSubmit={(event) => this.handleSubmit(event)}
                            >
                                <label htmlFor="user.eventName">Event name:</label>
                                <Control.text model="user.eventName" id="user.eventName" />

                                <label htmlFor="user.day">Day:</label>
                                <Control.text model="user.day" id="user.day" />

                                <button type="submit">Finish registration!</button>
                            </Form>
                        </div>
                    </Rodal>
                </div>
        );
    }


  }