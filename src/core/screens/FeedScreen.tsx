import { StyleSheet, Text, View, Button } from 'react-native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ListItem from '../components/NoteItem';
import SearchBar from '../components/SearchBar';
import React from 'react'


const FeedScreen = (): React.JSX.Element => {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 50, backgroundColor: 'rgba(200,200,200,0.2)' }}>
      <SearchBar></SearchBar>
      <Text>Home Screen</Text>
      <ListItem/>
    </View>
  )
}

export default FeedScreen

const styles = StyleSheet.create({})