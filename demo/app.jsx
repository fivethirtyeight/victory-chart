/*global document:false */
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import {VictoryBar} from "../src/";

const content = document.getElementById("content");

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
    };
  }

  getData() {
    return _.map(_.range(5), (index) => {
      return [
        {x: "apples", y: _.random(1, 5)},
        {x: "oranges", y: _.random(1, 5)},
        {x: "bananas", y: _.random(1, 5)}
      ];
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: this.getData(),
      });
    }, 3000);
  }

  render() {
    return (
      <VictoryBar
        height={600}
        padding={75}
        domain={{
          x: [1, 3],
          y: [0, 5]
        }}
        animate={{velocity: 0.02}}
        data={this.state.data}
        dataAttributes={[
          {fill: "cornflowerblue"},
          {fill: "tomato"},
          {fill: "orange"},
          {fill: "gold"}
        ]}
      />
    );
  }
}

ReactDOM.render((
  <App/>
), content);
