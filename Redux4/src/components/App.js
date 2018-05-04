import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onIncrement, onDecrement } from '../actions';

class App extends Component {

  render() {
    return (
      <div>
      <h1>{this.props.count}</h1>
      <button onClick={()=>this.props.onIncrement()}>+</button>
      <button onClick={()=>this.props.onDecrement()}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    count: state
  }
}

export default connect(mapStateToProps, {onIncrement, onDecrement})(App);
