// Write your code here

import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  onRandom = () => {
    const rand = Math.ceil(Math.random() * 100)
    this.setState({random: rand})
  }

  render() {
    const {random} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onRandom} className="btn">
            Generate
          </button>
          <p className="num">{random}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
