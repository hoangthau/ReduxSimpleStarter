import React from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

const API_KEY = 'AIzaSyCe6k-m_QBnlkm3RxQiqWF3PNpLSostCro';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.searchVideo('robinsharma');
  }

  searchVideo = term => {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };

  selectVideo = (e, video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const searchVideo = _.debounce(term => this.searchVideo(term), 500);
    return (
      <div>
        <SearchBar onSearchVideoChange={searchVideo} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.selectVideo}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
