import React, { Component } from 'react';
import './Time.css';
const SeparateMinutes = require('./SeparateMinutes');
const StartTimer = require('./StartTimer');
const ButtonStop = require('./ButtonStop');

let IntervalID;

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {allSeconds: 2000};
  }

  changeTimeState() {
    let newSeconds = this.state.allSeconds -1;
    this.setState(
      {allSeconds: newSeconds}
    );
  }

  render() {
    return (
      <div className="chrono">
        <SeparateMinutes allSeconds={this.state.allSeconds} />
        <StartTimer changeTimeFunction={this.changeTimeState.bind(this)} />
        <ButtonStop onClick={this.handleClickStop} />
      </div>
    )
  }

}

module.exports = Timer;

  /*handleClickStop() {
    clearInterval(IntervalID);
  }*/