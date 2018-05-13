import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Rodal from 'rodal';
import rightArrow from '../assets/images/right-arrow.svg';
// include styles
import 'rodal/lib/rodal.css';
require('../styles/rooms_modal.css');



export default class RoomsModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            visible: false,
        };


    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    render() {
        return (
                    
                <div className="rooms_container">
                    <h3 onClick={this.show.bind(this)}>Select Room <img className="right-arrow" src={rightArrow} /></h3>
                    <Rodal 
                        visible={this.state.visible} 
                        onClose={this.hide.bind(this)}
                        width={400}
                        height={300}
                        className="rooms_modal"
                    >
                    <h3>Rooms</h3>
                    <div className="room_select">
                        <Link to="/timetable" className="link_to_timetable" ><h4>Default</h4></Link>
                    </div>
                    </Rodal>
                </div>
        );
    }


  }