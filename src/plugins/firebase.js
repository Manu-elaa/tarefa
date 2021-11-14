import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBpKa7EqutgkRoz_d70iflb59rgPU-Ny6E",
    authDomain: "lista-manu.firebaseapp.com",
    projectId: "lista-manu",
    storageBucket: "lista-manu.appspot.com",
    messagingSenderId: "941401507593",
    appId: "1:941401507593:web:f6a820af76b7771953f5d8"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}