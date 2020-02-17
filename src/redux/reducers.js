import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import settings from './settings/reducers'
import user from './user/reducers'
import menu from './menu/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    user,
    menu,
    settings,
  })