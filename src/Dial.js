import React, { Component } from 'react';

class Dial extends Component {
  render(props) {
    return (
      <div className='time_display'>
        <span className='seconds'>{this.props.seconds}</span>
      </div>
    );
  }
};

module.exports = Dial;