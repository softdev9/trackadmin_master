import firebase from 'firebase/app'
import { notification } from 'antd'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBI7G4BVr-dZbFZ8AhMn97L0bJTkKLdSgM',
  authDomain: 'ml-app-dev-46e2b.firebaseapp.com/',
  databaseURL: 'https://ml-app-dev-46e2b.firebaseio.com/',
  projectId: 'ml-app-dev-46e2b',
  storageBucket: 'ml-app-dev-46e2b.appspot.com',
  messagingSenderId: '583382839121',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth
export default firebaseApp

export async function login(email, password) {
  console.log(`Login info: email: ${email} and password: ${password}`)
  return firebaseAuth()
    .signInWithEmailAndPassword(email, password)
    .then(() => true)
    .catch(error => {
      notification.warning({
        message: error.code,
        description: error.message,
      })
    })
    // return await fetch(`http://127.0.0.1:8000/accounts/log-in/?email=${email}&password=${password}`, {mode: 'no-cors'})
    // .then(() => true)
    // .catch(error =>{
    //     notification.warning({
    //         message: error.code,
    //         description: error.message,
    //     })
    // })
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
    return firebaseAuth()
    .signOut()
    .then(() => true)
    // return await fetch(`http://127.0.0.1:8000/accounts/log-out`, {mode: 'no-cors'})
    // .then(() => true)
    // .catch(error =>{
    //     notification.warning({
    //         message: error.code,
    //         description: error.message,
    //     })
    // })
}
