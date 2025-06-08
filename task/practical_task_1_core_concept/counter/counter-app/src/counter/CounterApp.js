import React from 'react';
import { Counter } from "./Counter";

export class Countrs extends React.Component {
  constructor(props) {
    super(props);

    this.counter = new Counter();

    this.state = {
      current: this.counter.getValue()
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.counter.increment();
    this.setState({ current: this.counter.getValue() });
  }

  handleDecrement() {
    this.counter.decrement();
    this.setState({ current: this.counter.getValue() });
  }

  render() {
    return React.createElement(
      'div',
      { style: { textAlign: 'center', marginTop: '30px' } },
      React.createElement('h1', null, `Counter Value: ${this.state.current}`),
      React.createElement(
        'button',
        { onClick: this.handleIncrement, style: { marginRight: '10px' } },
        'Increment'
      ),
      React.createElement(
        'button',
        { onClick: this.handleDecrement },
        'Decrement'
      )
    );
  }
}