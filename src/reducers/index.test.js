import rootReducer from '../reducers'

describe('rootReducer', () => {
  it('initializes the default store', () => {
    expect(rootReducer({}, {})).toEqual({
      startups: { all: [], filtered: [] }
    })
  })
})
