import React, {Component} from 'react';

class ButtonStop extends Component {

	render() {
		return <button className="BtnStop" onClick={this.props.onClick}>Stop</button>;
	}
}

module.exports = ButtonStop;