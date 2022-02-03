import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// }

const firebaseConfig = {
    apiKey: 'AIzaSyAKyckxZD-Ok3TXz2iYHXOpYcShKMcYxjY',
    authDomain: 'ventech-906a4.firebaseapp.com',
    projectId: 'ventech-906a4',
    storageBucket: 'ventech-906a4.appspot.com',
    messagingSenderId: '296200018086',
    appId: '1:296200018086:web:354fc81ba08fdbd096bc67'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = getFirestore(app)

export { db, auth }