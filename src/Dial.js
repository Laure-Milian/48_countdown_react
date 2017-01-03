import React, { Component } from 'react';

class Dial extends Component {

	render() {
		return (
			<div className='time_display'>
				<span className='minutes'>{this.props.seconds[0]}</span>
				:
				<span className='seconds'>{this.props.seconds[1]}</span>
			</div>
		);
	}

};

module.exports = Dial;