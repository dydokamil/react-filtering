import React from 'react'
import { connect } from 'react-redux'
import { fetchStartups } from '../actions/startups'
import startups from '../startup'
import './StartupTable.css'

export class StartupTable extends React.Component {
  componentDidMount = () => {
    this.props.fetchStartups(startups)
  }

  render () {
    return (
      <div>
        <div className="table=responsive">
          <table id="startup-table" className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Startup Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {this.props.startups.filtered &&
                this.props.startups.filtered.map(startup => {
                  return (
                    <tr key={startup.SNo}>
                      <td>{startup.SNo}</td>
                      <td>{startup.StartupName}</td>
                      <td>{startup.CityLocation}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    startups: state.startups
  }
}

export default connect(mapStateToProps, { fetchStartups })(StartupTable)
