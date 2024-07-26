import { makeAutoObservable, action } from "mobx";

interface Note {
    id: number,
}

class NotesStore {
    notes: Note[] = [];
    isLoading = false;
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
    async fetchNotes() {
        this.setLoading(true);
        this.setError('');
//Загрузка заметок
        try {
            
        } catch (error) {
            
        }
    }
}

const notesStore = new NotesStore();
export default notesStore; 