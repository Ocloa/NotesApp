import { makeAutoObservable } from "mobx";
import auth from '@react-native-firebase/auth'
import firestore, { FieldValue } from '@react-native-firebase/firestore'

interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    // Add other properties as needed
  }

class AuthStore {
  userInfo: {email?: string, createdAt?: FieldValue} | null = null;
  user: User | null = null;

    constructor() {
        makeAutoObservable(this);
        auth().onAuthStateChanged(async user => {
            this.user = user;
            if (user) {
                const userDoc = await firestore().collection('users').doc(user.uid).get();
                this.userInfo = userDoc.data() || null
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

        await firestore().collection('users').doc(email).collection('notes');
    }
}
const authStore = new AuthStore();
export default authStore