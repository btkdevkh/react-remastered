import React from 'react';

class Clock extends React.Component {
  state = {
    date: new Date()
  }

  handleTick() {
    this.tick = this.setState({ date: new Date() });
  }

  componentDidMount() {
    setInterval(() => this.handleTick(), 1000);
    return () => clearInterval(this.tick);
  }

  render() {
    return (
      <span>{this.state.date.toLocaleTimeString()}</span>
    )
  }
}

export default Clock;
