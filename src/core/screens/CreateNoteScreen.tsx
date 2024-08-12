import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useEffect } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { observer } from 'mobx-react-lite'
import { notesStore } from '../mobx/notesStore';
import  authStore  from '../mobx/authStore';
import { useNavigation, useRoute } from '@react-navigation/native';

interface RouteParams {
  noteId: string;
}

//@ts-ignore
const CreateNoteScreen = observer(() => {
  const navigation = useNavigation();
  const route = useRoute();
  const { noteId } = route.params! as RouteParams || {};
  const [title, setTitle] = React.useState('title');
  const [content, setContent] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('Incomplete');
  const [items, setItems] = React.useState([
    {label: 'Не выполнено', value: 'incomplete'},
    {label: 'Выполнено', value: 'complete'}
  ]);

  useEffect(() => {
    if (noteId) {
      const note = notesStore.notes.find(note => note.id === noteId);
      if (note){
        setTitle(note.title);
        setContent(note.content);
        setStatus(note.status);
      }
    }
  }, [noteId]);

  const handleSubmit = async () => {
    const user = authStore.user;
    console.log(user)
    if (!noteId && user?.email) {
      await notesStore.addNote({
        title,
        content,
        status,
        email: user.email,
        createdAt: new Date()
      });
      navigation.goBack();
    } else if (user && noteId) {
      await notesStore.updateNote(user.email!, noteId, {title, content, status});
      navigation.goBack();
    }
  };
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20, backgroundColor: '#F1F8F9' }}>
        <View style={{justifyContent:'flex-start', width: '95%', height:'80%', backgroundColor: '#FFFFFF', borderRadius: 10}}>
          <TextInput selectionColor='#304F5F' value={title} onChangeText={setTitle} textAlignVertical='top' multiline={false} placeholder='Type here...' style={styles.noteTitle}/>
          <TextInput selectionColor='#304F5F' value={content} onChangeText={setContent} textAlignVertical='top' multiline={true} placeholder='Type here...' style={styles.noteSpace}>
        </TextInput>
        <DropDownPicker open={open} value={status} items={items} setOpen={setOpen} setValue={setStatus} setItems={setItems}></DropDownPicker>
        </View>
        <Text onPress={()=>{handleSubmit(); Alert.alert('Заметка сохранена', 'Заметка успешно сохранена')}} >Сохранить</Text>
      </View>
)}
)

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