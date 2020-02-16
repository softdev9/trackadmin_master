import { all, takeEvery, put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import { login, currentAccount, logout } from 'services/user'
import actions from './actions'

export function* LOGIN({ payload }) {
  const { email, password } = payload
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(login, email, password)
  if (success) {
    notification.success({
      message: 'Logged In',
      description: 'You have successfully logged in to Clean UI React Admin Template!',
    })
    yield put({
      type: 'user/LOAD_CURRENT_ACCOUNT',
    })
  }
}

export function* LOAD_CURRENT_ACCOUNT() {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  console.log(`Load current user before checking`)
//   const response = yield call(currentAccount)
//   if (response) {
//     const { uid: id, email, photoURL: avatar } = response
//     yield put({
//       type: 'user/SET_STATE',
//       payload: {
//         id,
//         name: 'Administrator',
//         email,
//         avatar,
//         role: 'admin',
//         authorized: true,
//       },
//     })
//   }
  console.log(`Load current user after checking`)
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
        id : '1VSWIDLWI203D0X3SKD20DSJ2',
        name: 'Administrator',
        email: 'savenkodesign@gmail.com',
        avatar: '',
        role: 'admin',
        authorized: true,

    },
  })
}

export function* LOGOUT() {
  const success = yield call(logout)
  if (success) {
    notification.success({
      message: 'Logged Out',
      description: 'You have successfully logged out to Track Admin!',
    })
    yield put({
      type: 'user/SET_STATE',
      payload: {
        id: '',
        name: '',
        role: '',
        email: '',
        avatar: '',
        authorized: false,
        loading: false,
      },
    })
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ])
}
