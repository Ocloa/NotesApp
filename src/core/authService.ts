import auth from '@react-native-firebase/auth';
import { getFirestore } from '@react-native-firebase/firestore';
import { setDoc } from '@react-native-firebase/firestore';
import { doc } from '@react-native-firebase/firestore';

export const registerWithEmailPassword = async (email: string, password: string) => {
  return   auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
    return createNotesCollectionForUser(email.toLocaleLowerCase()); // Создание коллекции заметок для нового пользователя
  })
  .catch(error => {
    console.error(error);
  });
};

export const signInWithEmailPassword = async (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email.toLocaleLowerCase(), password);
};

export async function createNotesCollectionForUser(email: string) {
    const db = getFirestore();
    // Путь к документу, который будет содержать коллекцию заметок пользователя
    const userRef = doc(db, `users/${email.toLocaleLowerCase()}`);
    try {
      await setDoc(userRef, {  });
      console.log("Created notes collection for user:", email);
      await db.collection('users').doc(email.toLocaleLowerCase()).collection('notes').add({
        title: 'Welcome Note',
        content: 'This is your first note!',
        status: 'incomplete',
    })
    } catch (error) {
      console.error("Error creating notes collection for user:", error);
    }
  }
