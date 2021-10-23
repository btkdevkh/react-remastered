import React from 'react';
import styles from '../assets/css/Clock.module.css';

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
      // CSS Modules
      <span className={styles.time}>{this.state.date.toLocaleTimeString()}</span>
    )
  }
}

export default Clock;
