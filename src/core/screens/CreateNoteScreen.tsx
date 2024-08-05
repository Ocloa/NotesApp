import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { notesStore } from '../mobx/notesStore';

//@ts-ignore
const CreateNoteScreen = ({onAddNote}): React.JSX.Element => {
  const [noteTitle, setNoteTitle] = React.useState('title');
  const [note, setNote] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  const handleSubmit = () => {
    onAddNote(note);
    setNote('');
  };
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20, backgroundColor: '#F1F8F9' }}>
        <View style={{justifyContent:'flex-start', width: '95%', height:'80%', backgroundColor: '#FFFFFF', borderRadius: 10}}>
          <TextInput selectionColor='#304F5F' value={noteTitle} onChangeText={setNoteTitle} textAlignVertical='top' multiline={false} placeholder='Type here...' style={styles.noteTitle}/>
          <TextInput selectionColor='#304F5F' value={note} onChangeText={setNote} textAlignVertical='top' multiline={true} placeholder='Type here...' style={styles.noteSpace}>
        </TextInput>
        <DropDownPicker open={open} value={value} items={items} setOpen={setOpen} setValue={setValue} setItems={setItems}></DropDownPicker>
        </View>
        <Text onPress={()=>{handleSubmit; Alert.alert('Заметка сохранена', 'Заметка успешно сохранена')}} >Сохранить</Text>
      </View>
)}

export default CreateNoteScreen

const styles = StyleSheet.create({
  noteTitle: {  
    opacity: 1,
    padding: 10,
    marginTop: 5,
    fontSize: 22,
  },
  noteSpace: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D0D0D0',
    opacity: 0.5,
    padding: 10,
    marginTop: 5,
    fontSize: 16,
  },
  noteText: {
    color: 'black',
  }
})