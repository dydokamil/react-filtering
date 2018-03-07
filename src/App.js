import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './App.css';
import consts from './consts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
  }

  componentDidMount = () => {
    this.props.onFetchStartups();
  };

  onInputChange = event => {
    // this.setState({ filter: event.target.value });
    this.props.onFilterStartups(event.target.value);
  };

  render() {
    return (
      <div>
        <input onChange={e => this.onInputChange(e)} placeholder="Filter..." />
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Startup Name</th>
                <th>Location</th>
                <th>Industry</th>
              </tr>
            </thead>
            <tbody>
              {_.map(this.props.startups.startups, startup => (
                <tr key={startup.SNo}>
                  <td>{startup.StartupName}</td>
                  <td>{startup.CityLocation}</td>
                  <td>{startup.IndustryVertical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ startups: state.startups });

const mapDispatchToProps = dispatch => ({
  onFetchStartups: () => dispatch({ type: consts.FETCH_STARTUPS }),
  onFilterStartups: filter =>
    dispatch({
      type: consts.FILTER_STARTUPS,
      predicate: filter,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
