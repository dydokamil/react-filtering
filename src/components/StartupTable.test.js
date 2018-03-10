import React from 'react'
import { StartupTable, mapStateToProps } from './StartupTable'
import { mount } from 'enzyme'

describe('Startup Table', () => {
  const mockFetchStartups = jest.fn()
  const startups = [{ SNo: 1 }, { SNo: 2 }, { SNo: 3 }]
  const props = {
    fetchStartups: mockFetchStartups,
    startups: { all: startups, filtered: startups }
  }
  const startupTable = mount(<StartupTable {...props} />)

  it('renders startup table component', () => {
    expect(startupTable).toMatchSnapshot()
  })

  it('renders a table element with an id of #startup-table', () => {
    expect(startupTable.find('#startup-table').exists()).toBe(true)
  })

  describe('when mounting', () => {
    it('should fetch startups using `fetchStartups()` function call', () => {
      expect(mockFetchStartups).toHaveBeenCalled()
    })

    it('each startup should contain a `SNo` index', () => {
      const startupsWithSNo = startupTable
        .props()
        .startups.all.filter(startup => 'SNo' in startup).length

      expect(startupsWithSNo).toEqual(props.startups.all.length)
    })

    it('should fill up the table with startups from its props', () => {
      expect(
        startupTable
          .find('#startup-table')
          .children('tbody')
          .children('tr').length
      ).toEqual(startupTable.props().startups.all.length)
    })

    it('should map state to startup props', () => {
      const props = { startups: [] }
      const afterMappingStateToProps = mapStateToProps(props)

      expect(afterMappingStateToProps).toEqual(props)
    })
  })
})
