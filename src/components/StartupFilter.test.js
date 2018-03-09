import React from 'react'
import { StartupFilter } from './StartupFilter'
import { shallow } from 'enzyme'

describe('Startup Filter', () => {
  const startupFilter = shallow(<StartupFilter />)
  it('renders the startup filter', () => {
    expect(startupFilter).toMatchSnapshot()
  })
})
