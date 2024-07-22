import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'


const CreateNoteScreen = (): React.JSX.Element => {
    const ScreenWidth = Dimensions.get('screen');
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 50 }}>
        <View style={{borderWidth: 1, flex: 1, width: '90%'}}>
        <TextInput textAlignVertical='top' multiline={true} placeholder='Type here...' style={{}}>

        </TextInput>
        </View>

        <Text>*Страница создания заметки*</Text>
      </View>
)}

export default CreateNoteScreen

const styles = StyleSheet.create({})