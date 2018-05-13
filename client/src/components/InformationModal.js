import React, { Component } from 'react';
import Rodal from 'rodal';
import infoLogo from '../assets/images/info.svg';
// include styles
import 'rodal/lib/rodal.css';
require('../styles/information_modal.css');



export default class InformationModal extends Component {

    constructor(props){
        super(props);
        const reasonsToUse = [
            "Fortnite Friends Out. Schedule ahead. Master the grounds. Have fun",
            "Freelancing in a group. Organize and throw Skype out of the window(literally).",
            "Got to decide Group tuition timings. Easy peasy lemon squeazy.",
            "You discover new things every-freakin-day.",
            "Believe me. At some point of time, you're gonna be a control freak. Why not now?",
            "You are good lookin (I tried)",
            "This site is made. by. a. human.",
            "I am running out of Reasons",
            "This is a Dev post contest entry."
        ]

        this.state = {
            visible: false,
            reasons: reasonsToUse
        };


    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    render() {
        let random = Math.floor(Math.random()*100);
        let randomIndex = Math.floor(Math.random()*this.state.reasons.length);
        return (
                    
                <div className="information_container">
                    <img src={infoLogo} onClick={this.show.bind(this)}/>
                    <Rodal 
                        visible={this.state.visible} 
                        onClose={this.hide.bind(this)}
                        width={500}
                        height={400}
                        className="information_modal"
                    >
                    <h2>Reason to use #{random}</h2>
                    <p>{this.state.reasons[randomIndex]}</p>
                    </Rodal>
                </div>
        );
    }


  }