import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  const app = shallow(<App />);
  it('should render App component', () => {
    expect(app).toMatchSnapshot();
  });

  it('should initialize `state`', () => {
    expect(app.state()).toEqual({ filter: '' });
  });

  it('should change state when user types into `.filter-input`', () => {
    const filterInput = app.find('#filter-input');
    const startupName = 'Some Company Name';
    filterInput.simulate('change', { target: { value: startupName } });

    expect(app.state().filter).toEqual(startupName);
  });
});
