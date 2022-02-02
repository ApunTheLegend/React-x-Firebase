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
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
