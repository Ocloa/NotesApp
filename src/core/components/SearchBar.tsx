import React from 'react'
import {View, TextInput} from 'react-native'

function SearchBar() {
  return (
    <View style={{borderWidth: 1, width:200}}>
        <TextInput placeholder='Search...'></TextInput>
    </View>
  )
}

export default SearchBar