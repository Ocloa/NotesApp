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

interface NotesListProps {
  userId: string;
}

const FeedScreen: React.FC = observer(() => {
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
  
  return(
    <View style={{flex: 1, alignItems: 'center', padding: 5, gap: 10, backgroundColor: '#F1F8F9' }}>
      <SearchBar></SearchBar>
      <NotesList title='123' userId='WkpJf1vVxYYmJmK5RQQG'/>

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