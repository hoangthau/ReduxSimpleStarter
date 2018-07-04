import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  handleInputChange(event) {
    const inputValue = event.target.value;
    this.setState({ term: inputValue });
    console.log(this);
  }

  render() {
    return (
      <div>
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
