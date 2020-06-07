import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/action";

class Counter extends Component {
  decrement = () => {
    this.props.decrement();
  };
  increment = () => {
    this.props.increment();
  };

  render() {
    return (
      <div className="Counter">
        <h1>Counter</h1>
        <p>
          <button onClick={this.decrement}>-</button>
          Count: {this.props.count}
          <button onClick={this.increment}>+</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
