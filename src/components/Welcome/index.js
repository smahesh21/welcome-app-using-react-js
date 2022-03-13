// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribeClick = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const updatedText = this.getText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank You! Happy Learning</p>
        <div>
          <button className="subscribe-button" onClick={this.onSubscribeClick}>
            {updatedText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
