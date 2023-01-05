import React, { Component } from 'react';
import './like-dislike.css';

class LikeDislike extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, disliked: false, likeCount: 0, dislikeCount: 0 };
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleDislikeClick = this.handleDislikeClick.bind(this);
  }

  handleLikeClick() {
    this.setState(prevState => {
      if (prevState.liked) {
        return { liked: false, likeCount: prevState.likeCount - 1, disliked: false, dislikeCount: 0 };
      } else {
        return { liked: true, likeCount: prevState.likeCount + 1, disliked: false, dislikeCount: 0 };
      }
    });
  }

  handleDislikeClick() {
    this.setState(prevState => {
      if (prevState.disliked) {
        return { disliked: false, dislikeCount: prevState.dislikeCount - 1, liked: false, likeCount: 0 };
      } else {
        return { disliked: true, dislikeCount: prevState.dislikeCount + 1, liked: false, likeCount: 0 };
      }
    });
  }


  render() {
    let likeClass = 'like';
    let dislikeClass = 'dislike';
    if (this.state.liked) {
      likeClass += ' liked';
    }
    if (this.state.disliked) {
      dislikeClass += ' disliked';
    }
    return (
      <div className="like-dislike">
        <button className={likeClass} onClick={this.handleLikeClick}>
          ❤️
        </button>
        <span>{this.state.likeCount}</span>
        <button className={dislikeClass} onClick={this.handleDislikeClick}>
          👎
        </button>
        <span>{this.state.dislikeCount}</span>
      </div>
    );
  }
}

export default LikeDislike;
