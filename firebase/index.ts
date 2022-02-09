import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAOsiDeBUw7itYf_U088rvoWOFerPicHUA',
  authDomain: 'ng-registration-4be76.firebaseapp.com',
  projectId: 'ng-registration-4be76',
  databaseURL:
    'https://ng-registration-4be76-default-rtdb.europe-west1.firebasedatabase.app/',
  storageBucket: 'ng-registration-4be76.appspot.com',
  messagingSenderId: '662353226608',
  appId: '1:662353226608:web:9049b1db56210a5519fdb5',
  measurementId: 'G-NFKM2TTDKV',
}

const firebaseApp = initializeApp(firebaseConfig)
export const db = getDatabase(firebaseApp)
