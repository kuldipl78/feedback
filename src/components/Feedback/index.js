import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {showLoveImoji: false}

  onFeedback = () => {
    this.setState({showLoveImoji: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    const {showLoveImoji} = this.state

    return (
      <div className="main-container">
        {showLoveImoji === false && (
          <div className="imoji-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <div className="imoji">
              <ul className="diff-imoji">
                {emojis.map(eachEmoji => (
                  <li key={eachEmoji.id}>
                    <button className="btn-Element" onClick={this.onFeedback}>
                      <img
                        className="image"
                        alt={eachEmoji.name}
                        src={eachEmoji.imageUrl}
                      />
                    </button>
                    <p>{eachEmoji.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {showLoveImoji && (
          <div className="love-container">
            <img className="love-image" src={loveEmojiUrl} alt="love emoji" />
            <br />
            <h1 className = 'love-heaing' >Thank You </h1>
            <p className = 'description'>We will use your feedback to improve our Customer support performance</p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
