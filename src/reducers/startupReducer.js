import * as consts from '../actions/consts'

export const startupReducer = (state, action) => {
  switch (action.type) {
    case consts.FETCH_STARTUPS:
      return action.startups
    case consts.FILTER_STARTUPS:
      return state.filter(s =>
        s.Name.toLowerCase().includes(action.criteria.toLowerCase())
      )
    default:
      return state
  }
}

export default startupReducer
