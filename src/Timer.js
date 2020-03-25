import React, { Component } from 'react'

class Timer extends Component {

  componentDidMount(){
    this.timer = setInterval(this.ticker, 1000)
  }

  ticker(){
    this.setState({ clock: new Date() - this.props.start })
  }

  constructor(props){
    super(props);
    this.state = {
      clock: 0
    };
    this.ticker = this.ticker.bind(this)
  }
  render(){
    let clock = Math.round(this.state.clock / 1000)
    return(
      <div>
        <p> How long you've been here: </p>
        <br />
        { this.state.clock < 30000 ? <span className="clock"> { clock } </span> : <span className="redClock"> { clock } </span> } 
        <p> Seconds! </p>
        { this.state.clock > 30000 ? <div> Why are you still here? 😳 </div> : null }
      </div>
    )
  }
}

export default Timer;