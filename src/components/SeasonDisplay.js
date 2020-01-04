import React, { Component } from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach...BOYEEEE!!!",
    iconName: 'sun'
  },
  winter: {
    text: "Let's hit the slopes playa!!!",
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 9 && month < 2) {
    return lat > 0 ? 'winter' : 'summer'
  } else {
    return lat < 0 ? 'summer' : 'winter'
  }
}

class SeasonDisplay extends Component {
  render() {
    const season = getSeason(this.props.lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season]
    return (
      <div className={`season-display ${season}`}>
        <i className={`${iconName} icon-left massive icon`}/>
        <h1>{text}</h1>  
        <i className={`${iconName} icon-right massive icon`}/>
      </div>      
    )
  }
}

export default SeasonDisplay