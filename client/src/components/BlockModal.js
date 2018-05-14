import React, { Component } from 'react';
import Rodal from 'rodal';
import Cleave from 'cleave.js/react';
import blockButton from '../assets/images/block.svg';
// include styles
import 'rodal/lib/rodal.css';
require('../styles/block_modal.css');
require('../styles/block_modal.css');


export default class FormModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            visible: false,
            event: '',
            day: 'SUNDAY',
            start: '',
            end: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateTime = this.validateTime.bind(this);
    }


    handleChange(e) {
        
        let newState = {};
        if(e.target.name === "event" || e.target.name === "day"){
            newState[e.target.name] = e.target.value;
        }else{
            newState[e.target.name] = e.target.rawValue;
        }
        this.setState(newState);
    }

    validateTime(){
        let {start} = this.state;
        let {end} = this.state;
        if(+start.substring(0,2)<24 &&
            +start.substring(2)<60 &&
            +end.substring(0,2)<24 &&
            +end.substring(2)<60 &&
            start !== end){
                if(+start.substring(0,2)<+end.substring(0,2)){
                    return true;
                }else{
                    this.setState({
                        start: end,
                        end: start
                    });
                    return true;
                }
            }
        return false;
    }

    handleSubmit(e){
        e.preventDefault();
        let isTimeValid = this.validateTime();
        console.log(isTimeValid);
        this.props.onBlock(this.state);
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
                    
                <div className="block_button_container">
                    {/* <img className="add_event_logo" src={addEventLogo} /> */}
                    <img src={blockButton} className="block_button" onClick={this.show.bind(this)} />
                    <Rodal 
                        visible={this.state.visible} 
                        onClose={this.hide.bind(this)}
                        width={400}
                        height={350}
                        className="modal"
                    >
                        <header className="modal_heading">
                                <h3>BLOCK TIMEZONE:</h3>
                        </header>
                        <div className="form_container">
                            <form className="form" onSubmit={this.handleSubmit} >
                                <Cleave 
                                    placeholder="Start time - 06:00" 
                                    name="start"
                                    options={{
                                        blocks: [2,2], 
                                        delimiter: ':', 
                                        numericOnly: true
                                    }}
                                    onChange={this.handleChange}/>
                                <Cleave 
                                    placeholder="Start time - 16:00" 
                                    name="end"
                                    options={{
                                        blocks: [2,2], 
                                        delimiter: ':', 
                                        numericOnly: true
                                    }}
                                    onChange={this.handleChange}/>
                                <button type="submit">SUBMIT</button>
                            </form>
                        </div>
                    </Rodal>
                </div>
        );
    }


  }