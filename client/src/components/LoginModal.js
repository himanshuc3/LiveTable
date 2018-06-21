import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Rodal from 'rodal';
// include styles
import 'rodal/lib/rodal.css';
require('../styles/rooms_modal.css');
require('../styles/login_modal.css')



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
                    
                <div className="login_container">
                    <h3 onClick={this.show.bind(this)}>Login</h3>
                    <Rodal 
                        visible={this.state.visible} 
                        onClose={this.hide.bind(this)}
                        width={200}
                        height={300}
                        className="rooms_modal"
                    >
                    
                    </Rodal>
                </div>
        );
    }


  }