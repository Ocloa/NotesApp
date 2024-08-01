import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import React from 'react'

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
    Text: {
        fontWeight: 600,
        fontSize: 22,
    }

  })

export const LoginForm = () => {
    return (
            <>
                <Text style={styles.Text}>Авторизация</Text>
                <TextInput placeholder='Email' style={styles.AuthInput}></TextInput>
                <TextInput placeholder='Password' secureTextEntry style={styles.AuthInput}></TextInput>
                <Pressable style={styles.AuthButton}>
                    <Text style={{color: 'white', position: 'relative', top:'30%', fontWeight: 600, fontSize: 18}}>
                        Войти
                    </Text>
                </Pressable>
            </>
  )
}

export default LoginForm