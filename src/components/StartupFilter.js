import React from 'react'
import { connect } from 'react-redux'
import { filterStartups } from '../actions/startups'
import './StartupFilter.css'

export class StartupFilter extends React.Component {
  constructor () {
    super()

    this.state = { filter: '' }
  }

  onFilterChange = event => {
    this.setState({ filter: event.target.value }, () => {
      this.props.filterStartups(this.state.filter)
    })
  }

  render () {
    return (
      <div>
        <input
          id="filter-input"
          placeholder="Filter..."
          onChange={this.onFilterChange}
        />
      </div>
    )
  }
}

export default connect(null, { filterStartups })(StartupFilter)
