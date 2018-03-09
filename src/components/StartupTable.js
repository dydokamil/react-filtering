import React from 'react'
import { connect } from 'react-redux'
import { fetchStartups } from '../actions/startups'

export class StartupTable extends React.Component {
  constructor () {
    super()

    this.state = { filter: '' }
  }

  onFilterChange = event => {
    this.setState({ filter: event.target.value })
  }

  componentDidMount = () => {
    this.props.fetchStartups()
  }

  render () {
    return (
      <div>
        <input id="filter-input" onChange={this.onFilterChange} />
      </div>
    )
  }
}

export default connect(null, { fetchStartups })(StartupTable)
