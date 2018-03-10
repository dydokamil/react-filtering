import * as consts from '../actions/consts'

export const startupReducer = (state = { all: [], filtered: [] }, action) => {
  switch (action.type) {
    case consts.FETCH_STARTUPS:
      return { all: action.startups, filtered: action.startups }
    case consts.FILTER_STARTUPS:
      return {
        all: state.all,
        filtered: state.all.filter(s =>
          s.StartupName.toLowerCase().includes(action.criteria.toLowerCase())
        )
      }

    default:
      return state
  }
}

export default startupReducer
