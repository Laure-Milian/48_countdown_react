import React, { Component } from 'react';
import './Time.css';
const SeparateMinutes = require('./SeparateMinutes');
const ButtonStart = require('./ButtonStart');
const ButtonStop = require('./ButtonStop');

let IntervalID;

class Timer extends Component {  

  constructor(props) {
    super(props);
    this.state = {seconds: 60};
    console.log(this.state);
  }

  handleClickStart() {
   IntervalID = setInterval(this.changeTime.bind(this), 1000);
  }

  changeTime() {
    let newSeconds = this.state.seconds -1;
    this.setState(
      {seconds: newSeconds}
    );
  }

  handleClickStop() {
    clearInterval(IntervalID);
  }

  render() {
    return (
      <div className="chrono">
        <SeparateMinutes allSeconds={this.state.seconds} />
        <ButtonStart onClick={this.handleClickStart.bind(this)} />
        <ButtonStop onClick={this.handleClickStop} />
      </div>
    )
  }
}

module.exports = Timer;