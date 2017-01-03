import React, {Component} from 'react';

class ButtonStart extends Component {
	render() {
		return <button className='BtnStart' onClick={this.props.onClick}>Start</button>
	}
}

module.exports = ButtonStart;