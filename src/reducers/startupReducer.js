import * as consts from '../actions/consts';

export const startupReducer = (state, action) => {
  switch (action.type) {
    case consts.FETCH_STARTUPS:
      return action.startups;
    default:
      return state;
  }
};

export default startupReducer;
