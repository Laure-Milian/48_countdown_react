import React, { Component } from 'react';
const ButtonStart = require('./ButtonStart');

class StartTimer extends Component {

  	handleClickStart() {
   		setInterval(this.props.changeTimeFunction, 1000);
  	}
	
	render() {
		return <ButtonStart onClick={this.handleClickStart.bind(this)} />
	}

}

module.exports = StartTimer;