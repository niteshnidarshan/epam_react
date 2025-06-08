
import { Counter } from "./Counter";
import React from 'react';

interface AppState{
    current: number;
}

export class CounterApp extends React.Component<{}, AppState> {

    private counter: Counter;
    
    constructor(props) {
        super(props);
        this.counter = new Counter();

        this.state = {
            current: this.counter.getCounter()
        };

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        this.counter.increment();
        this.setState({current: this.counter.getCounter()});
    }

    handleDecrement() {
        this.counter.decrement();
        this.setState({current: this.counter.getCounter()});
    }

    render() {
        return React.createElement(
            'div',
            {style: {textAlign: 'center', marginTop: '30px'}},
            React.createElement('h1', null, `Counter Value: ${this.state.current}`),
            React.createElement('button', {onClick: this.handleIncrement, style: {marginRight: '10px'}}, 'Increment'),
            React.createElement('button', {onClick: this.handleDecrement}, 'Decrement')

        );
    }
}