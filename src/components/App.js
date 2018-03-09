import React from 'react';

export class App extends React.Component {
  constructor() {
    super();

    this.state = { filter: '' };
  }

  onFilterInputChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <div>
        <input id="filter-input" onChange={this.onFilterInputChange} />
      </div>
    );
  }
}

export default App;
