import auth from '@react-native-firebase/auth';
import { getFirestore } from '@react-native-firebase/firestore';
import { setDoc } from '@react-native-firebase/firestore';
import { doc } from '@react-native-firebase/firestore';

export const registerWithEmailPassword = async (email: string, password: string) => {
  return   auth()
  .createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    console.log('User account created & signed in!');
    const userId = userCredential.user.uid;
    return createNotesCollectionForUser(userId); // Создание коллекции заметок для нового пользователя
  })
  .catch(error => {
    console.error(error);
  });
};

export const signInWithEmailPassword = async (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export async function createNotesCollectionForUser(userId: string) {
    const db = getFirestore();
    // Путь к документу, который будет содержать коллекцию заметок пользователя
    const userRef = doc(db, `users/${userId}`);
    try {
      await setDoc(userRef, {  });
      console.log("Created notes collection for user:", userId);
      await db.collection('users').doc(userId).collection('notes').add({
        title: 'Welcome Note',
        content: 'This is your first note!',
        status: 'incomplete',
    })
    } catch (error) {
      console.error("Error creating notes collection for user:", error);
    }
  }
         /*   await firestore.collection('users').doc(user.uid).set({
                email: user.email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
            await firestore.collection('users').doc(user.uid).collection('notes').add({
                title: 'Welcome Note',
                content: 'This is your first note!',
                status: 'incomplete',
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            }) */
