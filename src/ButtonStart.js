import React, {Component} from 'react';

class ButtonStart extends Component {
	render(props) {
		return <button onClick={this.props.onClick}>Start</button>
	}
}

module.exports = ButtonStart;