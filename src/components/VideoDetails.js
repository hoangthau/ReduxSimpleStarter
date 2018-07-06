import React from 'react';

class VideoDetails extends React.Component {
  render() {
    const video = this.props.video;
    if (!video) {
      return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={videoUrl} />
        </div>
        <div className="details">
          <div className="video-title">{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetails;
