import React from 'react'
import { StartupTable } from './StartupTable'
import { mount } from 'enzyme'

describe('Startup Table', () => {
  const mockFetchStartups = jest.fn()
  const props = { fetchStartups: mockFetchStartups }
  const startupTable = mount(<StartupTable {...props} />)

  it('renders startup table', () => {
    expect(startupTable).toMatchSnapshot()
  })
  it('should initialize `state`', () => {
    expect(startupTable.state()).toEqual({ filter: '' })
  })

  it('should change state when user types into `#filter-input`', () => {
    const filterInput = startupTable.find('#filter-input')
    const startupName = 'Some Company Name'
    filterInput.simulate('change', { target: { value: startupName } })

    expect(startupTable.state().filter).toEqual(startupName)
  })

  describe('when mounting', () => {
    it('should fetch startups using `fetchStartups()` function call', () => {
      expect(mockFetchStartups).toHaveBeenCalled()
    })
  })
})
