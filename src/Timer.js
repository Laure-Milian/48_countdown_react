import React, { Component } from 'react';
import './Time.css';
const SeparateMinutes = require('./SeparateMinutes');
const ButtonStart = require('./ButtonStart');

class Timer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {seconds: 60};
    console.log(this.state);
  }

  handleClick() {
   setInterval(this.changeTime.bind(this), 1000);
  }

  changeTime() {
    let newSeconds = this.state.seconds - 1;
    this.setState(
      {seconds: newSeconds}
    );
  }

  render() {
    return (
      <div className="chrono">
        <SeparateMinutes allSeconds={this.state.seconds} />
        <ButtonStart onClick={this.handleClick.bind(this)} />
      </div>
    )
  }
}

module.exports = Timer;