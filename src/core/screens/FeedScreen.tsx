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
import { reaction } from 'mobx';
interface FeedScreenProps {
  navigation: StackNavigationProp<any>;
}

const FeedScreen = observer(({navigation}: FeedScreenProps) => {
  const [refreshing, setRefreshing] = useState(false);
  const [query, setQuery] = useState('');

  const handleRefresh = () => {
    setRefreshing(true);
    if (authStore.user && authStore.user.email !== null){
      notesStore.fetchNotes(authStore.user!.email);
      setRefreshing(false)
    } else {
      console.error('User email is null')
    }
  };

  const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
      margin: 5
    },
    listStyle: {
      width: '100%',
    }
  })

  const handleSearch = (text: string) => {
    setQuery(text);
  };

  const handleNoteSelect = (noteId: string) => {
    navigation.navigate('NewNote', {noteId, mode: 'edit'})
  };

  useEffect(() => {
    if (authStore.user?.email) {
      notesStore.fetchNotes(authStore.user.email);
      console.log(`Fetching notes of ${authStore.user.email}:`, notesStore.notes);
    }
  }, []);

  useEffect(() => {
    const filteredNotes = notesStore.notes.filter(note =>
      note.title.toLowerCase().includes(query.toLowerCase())
    );
    notesStore.setFilteredNotes(filteredNotes);
  }, [query]);

  useEffect(() => {
    const dispose = reaction(
      () => notesStore.notes,
      (notes) => {
        notesStore.setFilteredNotes(notes)
      }
    );
  
    return dispose;
  }, []);

  
  return(
    <View style={{flex: 1, alignItems: 'center', padding: 5, gap: 10, backgroundColor: '#F1F8F9' }}>
      <SearchBar onSearch={handleSearch}/>
      <FlatList
      style={styles.listStyle}
      data={notesStore.filteredNotes}
      keyExtractor={(item) => item.id!}
      renderItem={({item}) => (
        <NoteItem note={item} onSelect={handleNoteSelect}/>
      )}
      onRefresh={handleRefresh}
      refreshing={refreshing}/> 
    </View>
  )
});

export default FeedScreen
