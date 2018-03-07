import { combineReducers } from 'redux';
import startupReducer from './startupReducer';

export default combineReducers({
  startups: startupReducer,
});
