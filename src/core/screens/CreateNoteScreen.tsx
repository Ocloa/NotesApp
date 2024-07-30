import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React from 'react'
import { notesStore } from '../mobx/notesStore';


const CreateNoteScreen = (): React.JSX.Element => {
  const [text, onChangeText] = React.useState('123');
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20, backgroundColor: '#F1F8F9' }}>
        <View style={{justifyContent:'flex-start', width: '95%', height:'80%', backgroundColor: '#FFFFFF', borderRadius: 10}}>
        <TextInput selectionColor='#304F5F' onChangeText={onChangeText} textAlignVertical='top' multiline={true} secureTextEntry placeholder='Type here...' style={styles.noteSpace}>
          <Text style={styles.noteText}>{text}</Text>
        </TextInput>
        </View>
        <Text onPress={()=>{notesStore.addNote({id: '123', content: '123'}); Alert.alert('Заметка сохранена', 'Заметка успешно сохранена')}} >Сохранить</Text>
      </View>
)}

export default CreateNoteScreen

const styles = StyleSheet.create({
  noteSpace: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F1F8F9',
    opacity: 0.5,
    padding: 10,
    marginTop: 5,
    fontSize: 20,
  },
  noteText: {
    color: 'black',
  }
})