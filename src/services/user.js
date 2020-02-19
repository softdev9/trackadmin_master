// import firebase from 'firebase/app'
import { notification } from 'antd'
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/storage'

// const firebaseConfig = {
//   apiKey: 'AIzaSyAE5G0RI2LwzwTBizhJbnRKIKbiXQIA1dY',
//   authDomain: 'cleanui-72a42.firebaseapp.com',
//   databaseURL: 'https://cleanui-72a42.firebaseio.com',
//   projectId: 'cleanui-72a42',
//   storageBucket: 'cleanui-72a42.appspot.com',
//   messagingSenderId: '583382839121',
// }

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const firebaseAuth = firebase.auth
// export default firebaseApp

export async function login(email, password) {
  console.log(`Login info: email: ${email} and password: ${password}`)
    return await fetch(`http://127.0.0.1:8000/accounts/log-in/?email=${email}&password=${password}`, {mode: 'no-cors'})
    .then(() => true)
    .catch(error =>{
        notification.warning({
            message: error.code,
            description: error.message,
        })
    })
}

export async function currentAccount() {
  let userLoaded = false
  function getCurrentUser(auth) {
    return new Promise((resolve, reject) => {
      if (userLoaded) {
        resolve(firebaseAuth.currentUser)
      }
      const unsubscribe = auth.onAuthStateChanged(user => {
        userLoaded = true
        unsubscribe()
        resolve(user)
      }, reject)
    })
  }
  return getCurrentUser(firebaseAuth())
}

export async function logout() {
    return await fetch(`http://127.0.0.1:8000/accounts/log-out`, {mode: 'no-cors'})
    .then(() => true)
    .catch(error =>{
        notification.warning({
            message: error.code,
            description: error.message,
        })
    })
}
