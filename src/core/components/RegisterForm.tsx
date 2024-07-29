import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import React, { Component } from 'react'

const styles = StyleSheet.create({
    AuthInput: {
        height:'10%',
        width:'80%', 
        padding: 10, 
        borderWidth:1, 
        borderRadius: 10, 
        borderColor: 'lightgray', 
        backgroundColor: 'white', 
        opacity: 0.75
    },
    AuthButton: {
        height:'15%', 
        width:'80%', 
        borderWidth:2, 
        borderRadius: 10, 
        alignItems: 'center', 
        backgroundColor: 'rgba(48, 79, 95, 1)', 
        borderColor: '#FFFFFF'
    },

  })

export class RegisterForm extends Component {
  render() {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F1F8F9' }}>
        <LinearGradient colors={['#F1F8F1', '#F1F8F9']} start={{x: 0, y:0.5}} style={{flex:0.5, borderRadius: 10}}>
        <View style={{ borderWidth: 2, borderColor: '#FFFFFF', borderRadius: 10, flex:1, flexDirection: 'column', width: 300, justifyContent: 'center', alignItems:'center', gap:15, backgroundColor:'rgba(255, 241, 243, 0.5)'}}>
        <Text>AuthScreen</Text>
        <TextInput placeholder='Email' style={styles.AuthInput}></TextInput>
        <TextInput placeholder='Password' secureTextEntry style={styles.AuthInput}></TextInput>
        <TextInput placeholder='Confirm Password' secureTextEntry style={styles.AuthInput}></TextInput>
        <Pressable style={styles.AuthButton}>
            <Text style={{color: 'white', position: 'relative', top:'30%', fontWeight: 600, fontSize: 18}}>
                Регистрация
            </Text>
        </Pressable>
        <Pressable /*onPress={ Навигация или изменение на форму регистрации }*/>
            <Text>
                Вход
            </Text>
        </Pressable>
        </View>
        </LinearGradient>

    </View>
  )
  }
  
}

export default RegisterForm