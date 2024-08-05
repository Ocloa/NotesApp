import { makeAutoObservable, action } from "mobx";
import { auth } from "../../firebase/config";
import firestore from '@react-native-firebase/firestore';

interface Note {
    id?: string;
    title: string;
    content: string;
    status: string;
  }

class NotesStore {
    notes: Note[] = [];
    isLoading: boolean = false;
    error = '';
    
    constructor() {
        makeAutoObservable(this, {
            fetchNotes: action,
            setLoading: action,
            setError: action,
        })
    }
    setLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }
    setError(error: string){
        this.error = error;
    }
    setNotes(notes: Note[]) {
        this.notes = notes;
      }
    
    async fetchNotes(userId: string) {
        this.setLoading(true);
        try {
          const notesSnapshot = await firestore().collection('users').doc('WkpJf1vVxYYmJmK5RQQG').collection('notes').get();
          const notes: Note[] = notesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }) as Note);
          this.setNotes(notes);
        } catch (error) {
          console.error('Failed to fetch notes:', error);
        } finally {
          this.setLoading(false);
        }
      }
    
      async addNote(noteContent: Note) {
        const user = await auth.currentUser; // Получаем текущего пользователя
        if (!user) {
          console.log('No user is signed-in');
          return;
        }
      
        const noteData = {
          content: noteContent,
        };
      
        await firestore().collection(`users/${user.uid}/notes`).add(noteData);
        console.log('Note added successfully');
      }
    
      async updateNote(userId: string, noteId: string, updatedNote: Partial<Note>) {
        await firestore().collection('users').doc(userId).collection('notes').doc(noteId).update(updatedNote);
        // Аналогично добавлению заметки, после обновления можно обновить список заметок или просто обновить заметку в текущем списке
      }
    
      async deleteNote(userId: string, noteId: string) {
        await firestore().collection('users').doc(userId).collection('notes').doc(noteId).delete();
        // И после удаления заметки можно обновить список заметок
      }
}

export const notesStore = new NotesStore();
