import React from 'react';

import VideoListItem from './VideoListItem';

class VideoList extends React.Component {
  render() {
    const videos = this.props.videos;
    const videoListItems = videos.map(video => {
      return (
        <VideoListItem
          key={video.etag}
          video={video}
          onVideoSelect={this.props.onVideoSelect}
        />
      );
    });
    return <ul className="col-md-4 list-group">{videoListItems}</ul>;
  }
}

export default VideoList;
