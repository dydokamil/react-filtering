import React from 'react';
import { shallow } from 'enzyme';
import * as consts from './consts';
import * as actions from './startups';

describe('fetchStartupActions', () => {
  it('creates an action to fetch startups', () => {
    const expectedAction = { type: consts.FETCH_STARTUPS };

    expect(actions.fetchStartups()).toEqual(expectedAction);
  });
});
