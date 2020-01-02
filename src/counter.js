import React from "react";

export default class Counter extends React.Component {
      constructor(props) {
      super(props);
      this.state = {
          count: 0
      };
    }
    
    plus = () => ({
        count:this.setState.count + 1
    });
    mines = () => ({
        count:this.setState.count - 1
    })

    render() {
    return (
    <div>
        <button onClick={this.plus}>plus</button>
        <div>{this.state.count}</div>
        <button onClick={this.mines}>mines</button>
    </div>
    );
  }
}
