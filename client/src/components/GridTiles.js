import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import RGL, { WidthProvider } from "react-grid-layout";
require('../../node_modules/react-grid-layout/css/styles.css');
require('../../node_modules/react-resizable/css/styles.css');
require('../styles/GridTiles.css');

const ReactGridLayout = WidthProvider(RGL);

export default class GridTiles extends Component {
    render() {
      let layout = this.props.eventsArray.map((obj,index) => {
        return {
          i: index.toString(),
          x: 0,
          y: obj.startTime,
          w: 2,
          h: obj.endTime - obj.startTime
        }
      });

      let renderTile = this.props.eventsArray.map((obj,index) => {
        return (
          <div key={index} className="single_grid_tile" style={{backgroundColor:"tan"}}>{obj.eventName}</div>
        );
      });

      return (
        <ReactGridLayout
          className="layout grid" 
          layout={layout} 
          cols={1} 
          rowHeight={50} 
          width={1200}
          verticalCompact = {false}
        >
          {renderTile}
        </ReactGridLayout>
      )
    }
  }