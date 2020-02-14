import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import settings from './settings/reducers'
import user from './user/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    settings,
    user
  })