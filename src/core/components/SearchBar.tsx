import React from 'react'
import {View, TextInput} from 'react-native'

function SearchBar() {
  return (
    <View style={{borderWidth: 2, borderRadius: 10, borderColor: '#FFFFFF', backgroundColor:'rgba(255,255,255,0.7)', padding:5, width:'100%'}}>
        <TextInput placeholder='Search...' selectionColor='#304F5F' style={{height: 25}}></TextInput>
    </View>
  )
}

export default SearchBar