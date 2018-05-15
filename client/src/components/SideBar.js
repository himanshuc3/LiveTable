import React, { Component } from 'react';
import axios from 'axios';
import liveTableSvg from '../assets/images/live_table.svg';
import BlockModal from './BlockModal';
require('../styles/side_bar.css');

export default class SideBar extends Component {


    render() {
        return ( 
                <div className="side_bar">
                    <img className="side_bar_svg" src={liveTableSvg} />
                    <BlockModal onBlock = {this.props.onBlock}/>
                </div>
        );
    }


  }