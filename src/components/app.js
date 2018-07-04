import React from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar';

const API_KEY = 'AIzaSyCe6k-m_QBnlkm3RxQiqWF3PNpLSostCro';

export default class App extends React.Component {
  state = {
    videos: []
  };

  componentDidMount() {
    YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
