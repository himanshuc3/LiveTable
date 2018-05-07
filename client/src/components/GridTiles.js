import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';

//Grid css
require('../../node_modules/react-grid-layout/css/styles.css');
require('../../node_modules/react-resizable/css/styles.css');

export default class GridTiles extends Component {
    render() {
      // layout is an array of objects, see the demo for more complete usage
      // var layout = [
      //   {i: 'a', x: 0, y: 0, w: 2, h: 1, static: true}
      // ];
      let layout = this.props.eventsArray.map((obj,index) => {
        return {
          i:index,
          x: 0,
          y: obj.startTime,
          w: 2,
          h: obj.endTime - obj.startTime,
          static: true
        }
      });

      let renderTile = this.props.eventsArray.map((obj,index) => {
        return (
          <div key={index} style={{backgroundColor:"blue"}}>{obj.eventName}</div>
        );
      });

      return (
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={100} width={1200}>
          {renderTile}
        </GridLayout>
      )
    }
  }