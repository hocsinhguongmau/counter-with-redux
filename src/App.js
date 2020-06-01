import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  decrement=()=>{
    this.setState({count: this.state.count-1})
  }
  increment=()=>{
    this.setState({count: this.state.count+1})
  }
  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <p>Count: {this.state.count}</p>
        <p><button onClick={this.decrement}>-</button><button onClick={this.increment}>+</button></p>
      </div>
    );
  }
}

export default App;
