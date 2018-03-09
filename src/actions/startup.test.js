import React from 'react'
import { shallow } from 'enzyme'
import * as consts from './consts'
import * as actions from './startups'

describe('startup actions', () => {
  it('creates an action to fetch startups', () => {
    const startups = [{ SNo: 1 }, { SNo: 2 }]
    const expectedAction = { type: consts.FETCH_STARTUPS, startups }

    expect(actions.fetchStartups(startups)).toEqual(expectedAction)
  })

  it('creates an action to filter out the startups', () => {
    const criteria = 'Filter'
    const expectedAction = { type: consts.FILTER_STARTUPS, criteria }

    expect(actions.filterStartups(criteria)).toEqual(expectedAction)
  })
})
