import React from 'react'
import { shallow } from 'enzyme'
import { startupReducer } from './startupReducer'
import * as consts from '../actions/consts'
import * as startupActions from '../actions/startups'
import startupInfo from '../startup'

describe('startupReducer', () => {
  const startups = [
    { SNo: 1, StartupName: 'Startup', Funding: 10000 },
    { SNo: 2, StartupName: 'Another Startup', Funding: 20000 }
  ]
  describe('when initializing', () => {
    it('returns empty object', () => {
      expect(startupReducer(undefined, {})).toEqual({
        all: [],
        filtered: []
      })
    })

    it('sets startups', () => {
      expect(
        startupReducer(undefined, startupActions.fetchStartups(startups))
      ).toEqual({ all: startups, filtered: startups })
    })

    it(`sets startups based on a file containing startup info of over 2000 entries`, () => {
      expect(
        startupReducer(undefined, startupActions.fetchStartupsFromFile()).all
          .length
      ).toBeGreaterThan(2000)
    })

    describe('when filtering', () => {
      const criteria = 'Another'
      it('filters out the startups that do not match the criteria', () => {
        expect(
          startupReducer(
            { all: startups, filtered: startups },
            startupActions.filterStartups(criteria)
          ).filtered
        ).toEqual([startups[1]])
      })
    })
  })
})
