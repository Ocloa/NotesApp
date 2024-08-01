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
            <>
                <Text>Регистрация</Text>
                <TextInput placeholder='Email' style={styles.AuthInput}></TextInput>
                <TextInput placeholder='Password' secureTextEntry style={styles.AuthInput}></TextInput>
                <TextInput placeholder='Confirm Password' secureTextEntry style={styles.AuthInput}></TextInput>
                <Pressable style={styles.AuthButton}>
                    <Text style={{color: 'white', position: 'relative', top:'30%', fontWeight: 600, fontSize: 18}}>
                        Зарегистрироваться
                    </Text>
                </Pressable>
            </>

  )
  }
  
}

export default RegisterForm