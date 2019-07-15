import React, { Component } from 'react';
import CounterList from './CounterList';
import './App.scss';

class App extends Component {

  state = {
    counters: [
      {
        id: 1001,
        count: 0,
      },
      {
        id: 1002,
        count: 0,
      },
      {
        id: 1003,
        count: 0,
      },
      {
        id: 1004,
        count: 0,
      }
    ]
  }

  handleCounter = (id, type) => {
    const counters = this.state.counters.map(counter => {
      if (counter.id === id && type === '+') counter.count++;
      if (counter.id === id && type === '-') counter.count--;
      return counter;
    });
    this.setState({ counters: counters });
  }

  render() {
    const { counters } = this.state;
    return (
      <div className="container">
        <h1>Simple Counter App</h1>
        <CounterList
          counters={counters}
          onIncrement={this.handleCounter}
          onDecrement={this.handleCounter}
        />
      </div>
    );
  }
}
 
export default App;