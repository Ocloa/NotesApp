import { makeAutoObservable } from "mobx";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import firebase from '@react-native-firebase/app'

class AuthStore {
  userInfo: {email?: string, createdAt?: firebase.firestore.Timestamp} | null = null;

    constructor() {
        makeAutoObservable(this);
        auth().onAuthStateChanged(async user => {
            this.user = user;
            if (user) {
                const userDoc = await firestore().collection('users').doc(user.uid).get();
                this.userInfo = userDoc.data() || null = null;
            }
        });
    }

    login = async (email : string, password: string) => {
        await auth().signInWithEmailAndPassword(email, password);
    };
    logout = async () => {
        await auth().signOut();
        this.userInfo = null;
    }
    signup = async (email: string, password: string) => {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        await firestore().collection('users').doc(user.uid).collection('notes');
    }
}
const authStore = new AuthStore();
export default authStore