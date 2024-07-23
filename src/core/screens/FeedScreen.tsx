import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
 } from 'react-native'

import ListItem from '../components/NoteItem';
import SearchBar from '../components/SearchBar';
import notesStore from '../mobx/notesStore';
import React, { useRef, useEffect } from 'react'

import {observer} from 'mobx-react-lite'

const FeedScreen: React.FC = observer(() => {
  const FlatListRef = useRef<FlatList>(null)

  useEffect(() => {
    notesStore.fetchNotes()
  }, []);

  useEffect(() => {
    if (notesStore.error) {
      Alert.alert('Error', notesStore.error);
    }
  });
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 50, backgroundColor: 'rgba(200,200,200,0.2)' }}>
      <SearchBar></SearchBar>
      <Text>Home Screen</Text>
      <ListItem/>
    </View>
  )
})

export default FeedScreen

const styles = StyleSheet.create({})