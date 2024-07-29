import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'


const CreateNoteScreen = (): React.JSX.Element => {
  const [text, onChangeText] = React.useState('123');
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 50 }}>
        <View style={{ flex: 1, width: '90%'}}>
        <TextInput selectionColor='white' onChangeText={onChangeText} textAlignVertical='top' multiline={true} secureTextEntry placeholder='Type here...' style={styles.noteSpace}>
          <Text style={styles.noteText}>{text}</Text>
        </TextInput>
        </View>

        <Text>*Страница создания заметки*</Text>
        <Button title='Сохранить'></Button>
      </View>
)}

export default CreateNoteScreen

const styles = StyleSheet.create({
  noteSpace: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    opacity: 0.5,
    padding: 10,
    marginTop: 5,
    fontSize: 20,
  },
  noteText: {
    color: 'green',
  }
})