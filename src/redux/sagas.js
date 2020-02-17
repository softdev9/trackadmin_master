import { all } from 'redux-saga/effects'
import user from './user/sagas'
import settings from './settings/sagas'
import menu from './menu/sagas'

export default function* rootSaga() {
  yield all([user(), menu(), settings()])
}
