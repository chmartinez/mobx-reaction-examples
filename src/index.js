import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import App from './App.js';
import { computed, extendObservable, observable, reaction, runInAction } from 'mobx';
import { observer } from 'mobx-react';
/*
// Uncomment this to see an easy example
@observer
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.store = observable({ text: "A text", counter: 1});
  }

  increment() {
    runInAction('increment', () => this.store.counter++);
  }

  render() {
    return (
      <div className="container">
        <div className="parent">
          <h2>Parent</h2>
          <h4>Parent counter: {this.store.counter}</h4>
          <button onClick={this.increment}>Increment counter</button>
          <Child store={this.store} />
        </div>
      </div>  
    );
  }
}

@observer
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.innerStore = observable({
      innerCounter: 0
    });
    // this is just like a computed prop but it allows to see how reaction works
    this.dispose = reaction(
      () => {
        console.log('reacting...');
        return this.props.store.counter;
      },
      (doubleCounter) => {
        console.log('effecting...');
        runInAction('changing stuff', () => this.innerStore.innerCounter += doubleCounter)
      }
    );
  }

  componentWillUnmount(){
    this.dispose();
  }

  render() {
    const counter = this.innerStore.innerCounter;

    return (
      <div className="child">
        <h3>Child</h3>
        <h4>Inner Counter: {counter}</h4>
      </div>
    );
  }
}

ReactDOM.render(
  (<div>
    <Container />
    <DevTools />
    </div>)
  ,  document.getElementById('root'));
*/


ReactDOM.render((
  <div>
    <App />
    <DevTools />
  </div>
), document.getElementById('root'))