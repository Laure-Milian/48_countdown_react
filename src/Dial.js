import React, { Component } from 'react';

class Dial extends Component {
	constructor(props) {
		super(props);
		this.state = {
			minutes: Math.ceil(this.props.seconds / 60),
			seconds: this.props.seconds % 60
		};
		console.log(this.state);
	}
	render() {
    	return (
      		<div className='time_display'>
      		<span className='minutes'>{this.state.minutes}</span>
      		:
        	<span className='seconds'>{this.state.seconds}</span>
      		<div> Temps total en secondes : {this.props.seconds} </div>
      	</div>
    	);
  	}
};

module.exports = Dial;