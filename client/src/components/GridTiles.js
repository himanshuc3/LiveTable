import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

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
          i:`${index}`,
          x: 0,
          y: obj.startTime,
          w: 1.7,
          h: obj.endTime - obj.startTime
        }
      });

      let renderTile = this.props.eventsArray.map((obj,index) => {
        return (
          <div key={index} style={{backgroundColor:"lightcoral"}}>{obj.eventName}</div>
        );
      });

      return (
        <ResponsiveGridLayout className="layout" layout={layout} verticalCompact={true} margin={[10, 10]} cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}  rowHeight={120} width={1200}>
          {/* breakpoints={{lg: 1200}} */}
          {renderTile}
        </ResponsiveGridLayout>
      )
    }
  }