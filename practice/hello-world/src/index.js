import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CounterApp } from './counter_app/CounterApp';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
/*
const hello_world = React.createElement(
  "h1",
  {className: "helloWorld"},
  "Jai Ram G ki"
);

const start = React.createElement(
  "h2",
  null,
  "Hello World"
);

const incrementor = React.createElement(
  "div",
  null,
  React.createElement("label", {className: "inc_label"}, "0"),
  React.createElement("br"),
  React.createElement("button", {className: "dec_button"}, "-"),
  React.createElement("button", {className: "inc_button"}, "+")

);

const divToWrapBothElements = React.createElement(
  "div",
  null,
  hello_world,
  start,
  incrementor
  //React.createElement(CounterApp)
);

const rootElement = document.getElementById('root');
// ReactDOM.render(hello_world, rootElement);//render is deprecated from react 18
const root = ReactDOM.createRoot(rootElement);
root.render(divToWrapBothElements);
// root.render(React.createElement(CounterApp));
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return React.createElement(
      'div',
      { style: { textAlign: 'center', marginTop: '20px' } },
      React.createElement('h1', null, `Value: ${this.state.count}`),
      React.createElement(
        'button',
        { onClick: this.decrement, style: { marginRight: '10px' } },
        '-'
      ),
      React.createElement(
        'button',
        { onClick: this.increment },
        '+'
      )
    );
  }
}

// Render the Counter component with an initial value of 5
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  React.createElement(Counter, { initialValue: 5 })
);

