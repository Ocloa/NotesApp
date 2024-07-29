import { makeAutoObservable, action } from "mobx";

class NotesStore {
    notes: {id: string, content: string} [] = []
    isLoading = false;
    error = '';
    
    constructor() {
        makeAutoObservable(this, {
            fetchNotes: action,
            setLoading: action,
            setError: action,
        })
    }
    addNote = (note: {id: string; content: string}) => {
        this.notes.push(note);
    }
    removeNote = (id: string) => {
        this.notes = this.notes.filter(note => note.id !== id);
    }
    setLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }
    setError(error: string){
        this.error = error;
    }
    async fetchNotes() {
        this.setLoading(true);
        this.setError('');
//Загрузка заметок
        try {
            
        } catch (error) {
            
        }
    }
}

export const notesStore = new NotesStore();
