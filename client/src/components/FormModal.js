import React, { Component } from 'react';
import Rodal from 'rodal';
import addEventLogo from '../assets/images/addevent.svg';
// import { LocalForm, Control } from 'react-redux-form';
// include styles
import 'rodal/lib/rodal.css';
require('../styles/form_modal.css');


export default class FormModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            visible: false,
            event: '',
            day: '',
            start: '',
            end: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onEventAdd(this.state);
        this.hide();
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }


    render() {
        return (
                    
                <div className="form_button_container">
                    <button className="form_add_button" onClick={this.show.bind(this)}>
                    {/* <img className="add_event_logo" src={addEventLogo} /> */}
                    Add Event
                    </button>
                    <Rodal 
                        visible={this.state.visible} 
                        onClose={this.hide.bind(this)}
                        width={400}
                        height={350}
                        className="modal"
                    >
                        <header className="modal_heading">
                                <h3><img src={addEventLogo} className="modal_event_logo" />AN EVENT</h3>
                        </header>
                        <div className="form_container">
                            <form className="form" onSubmit={this.handleSubmit} >
                                <input type="text" name="event" onChange={this.handleChange} placeholder="Event name - Collaborate band"/>
                                <input type="text" name="day" onChange={this.handleChange} placeholder="Day - Monday"/>
                                <input type="text" name="start" onChange={this.handleChange} placeholder="Start time - 5"/>
                                <input type="text"  name="end" onChange={this.handleChange} placeholder="End Time - 16"/>
                                <button type="submit">SUBMIT</button>
                            </form>
                        </div>
                    </Rodal>
                </div>
        );
    }


  }