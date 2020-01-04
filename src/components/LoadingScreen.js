import React, { Component } from 'react';

class LoadingScreen extends Component {
  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">
          {this.props.message}
        </div>
      </div>
    )
  }
}

LoadingScreen.defaultProps = {
  message: "Loading..."
}

export default LoadingScreen