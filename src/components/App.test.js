import React from 'react'
import App from './App'
import { shallow, mount } from 'enzyme'

describe('App', () => {
  const app = shallow(<App />)

  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('contains a connected StartupFilter', () => {
    expect(app.find('Connect(StartupFilter)').exists()).toBe(true)
  })

  it('contains a connected StartupTable', () => {
    expect(app.find('Connect(StartupTable)').exists()).toBe(true)
  })
})
