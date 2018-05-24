import React, { Component } from 'react'
import axios from 'axios'
import BlockModal from './BlockModal'
import userImage from '../assets/images/user_image.png'
import calendar from '../assets/images/calendar.svg'
import checked from '../assets/images/checked.svg'
import heart from '../assets/images/heart.svg'
import star from '../assets/images/star.svg'
import logout from '../assets/images/logout.svg'
import notification from '../assets/images/notification.svg'
import settings from '../assets/images/settings.svg'
require('../styles/side_bar.css')

export default class SideBar extends Component {


    render() {
        return ( 
                <div className="side_bar">
                    <img src={userImage} alt="User image. Right now set to default" className="user_image"/>
                    <div className="sidebar_icons">
                        <img src={star} alt="Star" />
                        <img src={heart} alt="Heart" />
                        <img src={calendar} alt="calendar" />
                        <img src={checked} alt="checked" />
                        <img src={settings} alt="settings" />
                    </div>
                    
                    {/* <BlockModal onBlock = {this.props.onBlock}/> */}
                </div>
        );
    }


  }