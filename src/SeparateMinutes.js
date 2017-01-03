import React, {Component} from 'react';
const Dial = require ('./Dial.js');

class SeparateMinutes extends Component {
	
	separateTime(allSeconds) {
    	let minutes = Math.floor(allSeconds / 60);
    	let seconds = allSeconds % 60;
    	return [minutes, seconds];
  	}
	
	render(props) {
		console.log(this.props);
		return (
			<Dial seconds={this.separateTime(this.props.allSeconds)} />
		)
	}

}

module.exports = SeparateMinutes;