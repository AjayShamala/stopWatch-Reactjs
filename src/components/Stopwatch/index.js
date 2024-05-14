import {Component} from 'react'
import './index.css'
class Stopwatch extends Component {
  state = {isTimer: false, timeElapsed: 0}
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  isResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimer: false, timeElapsed: 0})
  }
  isStopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimer: false})
  }
  isUpdateTimer = () => {
    this.setState(previous => ({timeElapsed: previous.timeElapsed + 1}))
  }
  startTimer = () => {
    this.intervalId = setInterval(this.isUpdateTimer, 1000)
    this.setState({isTimer: false})
  }
  renderMinutesAndSeconds = () => {
    const {timeElapsed} = this.state
    const minutes = Math.floor(timeElapsed / 60)
    const seconds = Math.floor(timeElapsed % 60)
    const stringMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringMinutes}:${stringSeconds}`
  }
  render() {
    const {isTimer}=this.state
    return (
      <div className="bg-container">
        <div className="stop-container">
          <h1 className="main-heading">StopWatch</h1>
          <div className="card-container">
            <div className="container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="para">Timer</p>
            </div>
            <h1 className="parrass">{this.renderMinutesAndSeconds()}</h1>
            <div className="containers">
              <button className="button1" onClick={this.startTimer} disabled={isTimer}>
                Start
              </button>
              <button className="button2" onClick={this.isStopTimer}>
                Stop
              </button>
              <button className="button3" onClick={this.isResetTimer}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
