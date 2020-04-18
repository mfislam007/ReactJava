import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div className='counter'>
        <Counterbutton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <Counterbutton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <Counterbutton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className='count'>{this.state.counter}</span>
        <div>
          <button className='reset' onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  reset() {
    this.setState({ counter: 0 });
  }
  increment(by) {
    // console.log(`increment from child - ${by}`);
    //this.state.counter++;
    this.setState((prevState) => {
      return { counter: this.state.counter + by };
    });
  }

  decrement(by) {
    // console.log(`increment from child - ${by}`);
    //this.state.counter++;
    this.setState((prevState) => {
      return { counter: this.state.counter - by };
    });
  }
}

class Counterbutton extends Component {
  constructor() {
    super();

    //    this.state = {
    //      counter: 0,
    //    };

    //    this.increment = this.increment.bind(this);
    //    this.decrement = this.decrement.bind(this);
  }
  render() {
    return (
      <div className='Counterbutton'>
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          + {this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          - {this.props.by}
        </button>
        {/*<span className='count'
        >{this.state.counter}</span>*/}
      </div>
    );
  }

  //  increment() {
  //console.log('increment');
  //this.state.counter++;
  //    this.setState({
  //      counter: this.state.counter + this.props.by,
  //    });

  //    this.props.incrementMethod(this.props.by);
  //  }

  //  decrement() {
  //console.log('increment');
  //this.state.counter++;
  //    this.setState({
  //      counter: this.state.counter - this.props.by,
  //    });

  //    this.props.decrementMethod(this.props.by);
  //  }
}

export default Counter;
