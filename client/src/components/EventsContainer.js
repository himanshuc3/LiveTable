import React, { Component } from 'react';
import GridTiles from './GridTiles';

export default class EventsContainer extends Component {
    render() {

        // let eventsLength = this.props.eventsArray.length;
        // for(let i=0;i<eventsLength;i++){

        // }

        return (
            <div className="events_container">
                <GridTiles eventsArray = {this.props.eventsArray}/>
            </div>
        );
    }
  }