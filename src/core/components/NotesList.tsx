import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { notesStore } from '../mobx/notesStore';

interface NotesListProps {
  title: string;
  userId: string;
}

const NotesList: React.FC<NotesListProps> = observer(({ userId }) => {
  useEffect(() => {
    notesStore.fetchNotes(userId);
  }, [userId]);

  if (notesStore.isLoading) {
    return <Text>Loading...</Text>;
  }
  const Item = ({title}: NotesListProps) => {
    <View style={styles.view}>
      <Text>{title}</Text>
    </View>
  }

  return (
      <FlatList
        data={notesStore.notes}
        keyExtractor={(item) => item.id || ''}
        renderItem={({ item }) => 
        (
          <View style={styles.view}>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        )}
      />
  );
});

const styles = StyleSheet.create( {
  view: {
      flexDirection: 'column',
      justifyContent: 'center',
      width: Dimensions.get('screen').width,
      minHeight: Dimensions.get('screen').height * 0.1,
      maxHeight: Dimensions.get('screen').height * 0.15,
      padding: 5,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#EEEEEE',
      backgroundColor: 'rgba(255,255,255,0.7)',
  },
  status: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingHorizontal: 25,
    paddingVertical: 5,
    flex: 1

  }
})

export default NotesList;