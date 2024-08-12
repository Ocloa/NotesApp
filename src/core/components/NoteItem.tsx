
import React from 'react';
import { Note } from '../mobx/notesStore';
import {View, Text, StyleSheet, Pressable} from 'react-native';

interface NoteItemProps{
  note: Note;
  onSelect: (noteId: string) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({note, onSelect}) => {
  return (
    <Pressable
      style={styles.view}
      onPress={() => note.id && onSelect(note.id)}>
        <Text style={{position: 'absolute', top: 0, padding:10, fontSize: 16}}>{note.title}</Text>
        <Text style={{position: 'absolute', padding: 10, fontSize: 12}}>{note.content}</Text>
        <Text style={{position: 'absolute', bottom: 0, right:0, padding: 10, fontSize: 10}}>Статус:
          {<Text style={{color: note.status === 'complete' ? 'green' : 'red'}} > { note.status}</Text>}
        </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create( {
    view: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        minHeight: 75,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#EEEEEE',
        backgroundColor: 'rgba(255,255,255,0.7)',
    }
})

export default NoteItem;