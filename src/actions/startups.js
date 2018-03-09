import * as consts from './consts';

export const fetchStartups = startups => ({ type: consts.FETCH_STARTUPS, startups });
export const filterStartups = criteria => ({ type: consts.FILTER_STARTUPS, criteria });
