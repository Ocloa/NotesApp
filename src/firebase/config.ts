import firebase from "@react-native-firebase/app";
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDKdf5KKZ1m55FhCf1a15hO3zPp0wmDYKk",
    authDomain: "notesapp-afbec.firebaseapp.com",
    projectId: "notesapp-afbec",
    storageBucket: "notesapp-afbec.appspot.com",
    messagingSenderId: "643245088119",
    appId: "1:643245088119:web:e3d6920687fbca404a1572",
    measurementId: "G-DNTXZ7CXBB"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;