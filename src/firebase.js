import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBV6OZK_a-VbDbnWS5E_p2DgJH16C_7RUM",
    authDomain: "sleep-tracking-62fdc.firebaseapp.com",
    projectId: "sleep-tracking-62fdc",
    storageBucket: "sleep-tracking-62fdc.appspot.com",
    messagingSenderId: "1072544756550",
    appId: "1:1072544756550:web:38940e69880fa845456b47",
    measurementId: "G-KVY8Q7YBNM"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { auth, provider }
export default db;