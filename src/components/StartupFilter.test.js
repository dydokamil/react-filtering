import React from 'react'
import { StartupFilter } from './StartupFilter'
import { shallow } from 'enzyme'

describe('Startup Filter', () => {
  const mockFilterStartups = jest.fn()
  const props = { filterStartups: mockFilterStartups }
  const startupFilter = shallow(<StartupFilter {...props} />)
  const startupName = 'Some Company Name'

  it('renders the startup filter', () => {
    expect(startupFilter).toMatchSnapshot()
  })

  it('should render an input with an id of #filter-input', () => {
    expect(startupFilter.find('#filter-input').exists()).toBe(true)
  })

  it('should initialize `state`', () => {
    expect(startupFilter.state()).toEqual({ filter: '' })
  })

  it('should change state when user types into `#filter-input`', () => {
    const filterInput = startupFilter.find('#filter-input')
    filterInput.simulate('change', { target: { value: startupName } })

    expect(startupFilter.state().filter).toEqual(startupName)
  })

  it('dispatches an action when user types into the filter using `filterStartups()` from props', () => {
    startupFilter
      .find('#filter-input')
      .simulate('change', { target: { value: 'Some value' } })
    expect(mockFilterStartups).toHaveBeenCalledWith(startupName)
  })
})
