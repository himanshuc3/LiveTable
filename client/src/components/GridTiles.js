import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';

//Grid css
require('../../node_modules/react-grid-layout/css/styles.css');
require('../../node_modules/react-resizable/css/styles.css');

export default class GridTiles extends Component {
    render() {
      // layout is an array of objects, see the demo for more complete usage
      var layout = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'b', x: 0, y: 0, w: 3, h: 2, minW: 2, maxW: 4, minH: 1, maxH:4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
      ];

      return (
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={100} width={1200}>
          <div key="a" style={{backgroundColor:"blue"}}>a</div>
          <div key="b" style={{backgroundColor:"blue"}}>b</div>
          <div key="c" style={{backgroundColor:"blue"}}>c</div>
        </GridLayout>
      )
    }
  }