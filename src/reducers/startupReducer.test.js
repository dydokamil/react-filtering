import React from 'react';
import { shallow } from 'enzyme';
import startupReducer from './startupReducer';
import * as consts from '../actions/consts';

describe('startupReducer', () => {
  describe('when initializing', () => {
    const startups = [
      { SNo: 1, Name: 'Staup', Funding: 10000 },
      { SNo: 2, Name: 'Startup2', Funding: 20000 },
    ];

    it('sets startups', () => {
      expect(startupReducer(undefined, {
        type: consts.FETCH_STARTUPS,
        startups,
      })).toEqual(startups);
    });
  });
});
