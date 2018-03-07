import consts from '../consts';
import startups from '../startup';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case consts.FETCH_STARTUPS:
      return { startups: _.mapKeys(startups, 'SNo') };
    case consts.FILTER_STARTUPS:
      return {
        startups: _.filter(startups, s =>
          s.StartupName.toLowerCase().includes(action.predicate.toLowerCase())),
      };
    default:
      return state;
  }
}
