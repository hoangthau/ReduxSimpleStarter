import React from 'react';

class VideoListItem extends React.Component {
  render() {
    const video = this.props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
      <li
        className="list-group-item"
        onClick={e => this.props.onVideoSelect(e, video)}
      >
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{title}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
