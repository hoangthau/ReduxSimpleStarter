import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  handleInputChange(event) {
    const inputValue = event.target.value;
    this.setState({ term: inputValue });
    this.props.onSearchVideoChange(inputValue);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          placeholder="Search..."
          onChange={e => this.handleInputChange(e)}
        />
      </div>
    );
  }
}

export default SearchBar;
