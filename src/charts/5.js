import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';
import data from '../data/5.json';


class Chart5 extends Component {

  componentDidMount() {
    this.drawChart(data)
  }

  drawChart(data) {
    const spec = data;
    vegaEmbed("#vis5", spec)
      // result.view provides access to the Vega View API
      .then(result => console.log(result))
      .catch(console.warn);
  }

  render() { return <div id='vis5'></div>}
}

export default Chart5;