import React, { Component } from 'react';
import liveTableSvg from '../assets/images/live_table.svg';
require('../styles/side_bar.css');

export default class SideBar extends Component {

    render() {
        return (
                    
                <div className="side_bar">
                    <img className="side_bar_svg" src={liveTableSvg} />
                    <ul className="side_bar_items">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
        );
    }


  }