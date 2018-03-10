import * as consts from './consts'
import startupsFromFile from '../startup'

export const fetchStartups = startups => ({
  type: consts.FETCH_STARTUPS,
  startups
})

export const fetchStartupsFromFile = startups => ({
  type: consts.FETCH_STARTUPS,
  startups: startupsFromFile
})

export const filterStartups = criteria => ({
  type: consts.FILTER_STARTUPS,
  criteria
})
