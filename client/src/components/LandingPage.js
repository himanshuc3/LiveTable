import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
require('../styles/landing_page.css');

export default class LandingPage extends Component {

    render() {

        return(
            <div className="landing_page">
                <div className="left_container">
                    <header className="nav_container">
                        <h4 className="app_name">Livetable.</h4>
                    </header>
                    <div className="content">
                        <h1>Realtime&mdash;tables</h1>
                        <p>Create timetables and watch them update realtime with your friends/colleagues.</p>
                    </div>
                    <div className="box_container">
                        <div className="box_rooms">
                            <h3>Rooms</h3>
                        </div>
                    </div>
                </div>
                <div className="right_container">

                </div>
            </div>
        );
    }
}