import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
 } from 'react-native'

import ListItem from '../components/NoteItem';
import SearchBar from '../components/SearchBar';
import notesStore from '../mobx/notesStore';
import React, { useRef, useEffect, useState } from 'react'

import {observer} from 'mobx-react-lite'

const FeedScreen: React.FC = observer(() => {
  const FlatListRef = useRef<FlatList>(null)
  const [selectedNote, setSelectedNote] = useState<{id: string} | null>(null);
  useEffect(() => {
    notesStore.fetchNotes()
  }, []);

  useEffect(() => {
    if (notesStore.error) {
      Alert.alert('Error', notesStore.error);
    }
  });

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
  
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 50, backgroundColor: 'rgba(200,200,200,0.2)' }}>
      <SearchBar></SearchBar>
      <Text>Home Screen</Text>
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