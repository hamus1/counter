import React from "react";

export default class Counter extends React.Component {
  render() {
      constructor(props) {
      super(props);
      this.state = {
          count: 0
      };
    }
    return (
    <div>
        <button>plus</button>
        <div>{this.state.count}</div>
        <button>mines</button>
    </div>
    );
  }
}
