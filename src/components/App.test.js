import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  const app = shallow(<App />);
  it('should render App component', () => {
    expect(app).toMatchSnapshot();
  });
});
