import { makeAutoObservable } from "mobx";
import { auth } from "../../firebase/config";
import firebase from 'firebase/compat/app';

class AuthStore {
    user: firebase.User | null = null;

    constructor() {
        makeAutoObservable(this);
        auth.onAuthStateChanged(user => {
            this.user = user;
        });
    }
    login = async (email : string, password: string) => {
        await auth.signInWithEmailAndPassword(email, password);
    };
    logout = async () => {
        await auth.signOut();
    }
}

export const authStore = new AuthStore();