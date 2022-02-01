import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_REACT_API_KEY,
//     authDomain: process.env.FIREBASE_REACT_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_REACT_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_REACT_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_REACT_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_REACT_APP_ID
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

export const db = getFirestore(app)
