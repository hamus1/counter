import React from "react";

export default class Counter extends React.Component {
      constructor(props) {
      super(props);
      this.state = {
          count: 0
      };
    }
    
    plus = () => this.setState({
        count:this.state.count + 1
    });
    mines = () => this.setState({
        count:this.state.count - 1
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
