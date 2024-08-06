import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
 } from 'react-native'

import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import { notesStore } from '../mobx/notesStore';
import React, { useRef, useEffect, useState } from 'react'

import {observer} from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native';
import authStore  from '../mobx/authStore';

interface NotesListProps {
  userId: string;
}

const FeedScreen = observer(() => {
  const navigation = useNavigation();
  const FlatListRef = useRef<FlatList>(null)
  const [selectedNote, setSelectedNote] = useState<{id: string} | null>(null);

  const handleNotePress = ( note: {id: string}) => {
    setSelectedNote(note);
  }

  const renderItem = (item: {id:string} ) => (
    <TouchableOpacity
      onPress={() => handleNotePress(item)}
      style={styles.itemContainer}
    >
      <Text>{item.id}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    if (authStore?.user) {
      notesStore.fetchNotes(authStore.user.uid);
    }
  }, []);

  
  return(
    <View style={{flex: 1, alignItems: 'center', padding: 5, gap: 10, backgroundColor: '#F1F8F9' }}>
      <SearchBar></SearchBar>
      <FlatList
      data={notesStore.notes}
      keyExtractor={(item) => item.id!}
      renderItem={({item}) => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
      )}/>

{/*}  <FlatList data={notesStore.notes}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={1}/> {*/}
    </View>
  )
})

export default FeedScreen

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 5
  }
})