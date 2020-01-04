import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import LoadingScreen from './LoadingScreen';
import '../SeasonDisplay.css';

class App extends Component {
  state = { lat: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(position => 
      this.setState({ lat: position.coords.latitude }), err => this.setState({ errorMessage: err.message })
    )
  }

  componentDidUpdate() {
    console.log(this.state.lat)
    console.log(new Date().getMonth())
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    } else if (this.state.lat && !this.state.errorMessage) {
      return <div><SeasonDisplay /></div>
    } else {
      return <LoadingScreen message="Please accept location access request" />
    }
  }

  render() {
    return (
      <div className="ui container">
        {this.renderContent()}  
      </div>
    )
  }
}

export default App