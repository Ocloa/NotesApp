import { 
  StyleSheet,
  View,
  FlatList,
 } from 'react-native'

import NoteItem from '../components/NoteItem'
import SearchBar from '../components/SearchBar';
import { notesStore } from '../mobx/notesStore';
import React, { useRef, useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';


import {observer} from 'mobx-react-lite'
import authStore  from '../mobx/authStore';

interface NotesListProps {
  userId: string;
}

interface FeedScreenProps {
  navigation: StackNavigationProp<any>;
}

const FeedScreen = observer(({navigation}: FeedScreenProps) => {
  const FlatListRef = useRef<FlatList>(null)
  const [refreshing, setRefreshing] = useState(false);
  const [selectedNote, setSelectedNote] = useState<{id: string} | null>(null);

  const handleRefresh = () => {
    setRefreshing(true);
    if (authStore.user && authStore.user.email !== null){
      notesStore.fetchNotes(authStore.user!.email);
      setRefreshing(false)
    } else {
      console.error('User email is null')
    }

  };

  const handleNoteSelect = (noteId: string) => {
    console.log(`Selected note ID: ${noteId}`);
    navigation.navigate('New Note', {noteId})
  };

  useEffect(() => {
    if (authStore.user?.email) {
      notesStore.fetchNotes(authStore.user.email);
      console.log(`Fetching notes of ${authStore.user.email}:`, notesStore.notes);
    }
  }, []);

  useEffect(() => {
    console.log('Refreshing state:', refreshing);
  }, [refreshing])

  
  return(
    <View style={{flex: 1, alignItems: 'center', padding: 5, gap: 10, backgroundColor: '#F1F8F9' }}>
      <SearchBar/>
      <FlatList
      style={styles.listStyle}
      data={notesStore.notes}
      keyExtractor={(item) => item.id!}
      renderItem={({item}) => (
        <NoteItem note={item} onSelect={handleNoteSelect}/>
      )}
      onRefresh={handleRefresh}
      refreshing={refreshing}/> 
    </View>
  )
})

export default FeedScreen

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 5
  },
  listStyle: {
    width: '100%',
  }
})