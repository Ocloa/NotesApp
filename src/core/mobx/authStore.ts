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
    isAuthenticated: boolean = false
    userInfo: {email?: string, createdAt?: FieldValue} | null = null;
    user: User | null = null;

    constructor() {
        makeAutoObservable(this);
        auth().onAuthStateChanged(async user => {
            this.user = user;
            if (user) {
                const userDoc = await firestore().collection('users').doc(user.uid).get();
                this.userInfo = userDoc.data() || null
                this.isAuthenticated = true;
            }
            else {
                this.isAuthenticated = false;
                this.actionSetIsAuthenticated
            }
        });
    }

    actionSetIsAuthenticated(value: boolean){
        this.isAuthenticated = value;
    }

    logout = async () => {
        await auth().signOut();
        this.userInfo = null;
    }
}
const authStore = new AuthStore();
export default authStore