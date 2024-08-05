import { StyleSheet, Text, Alert, TextInput, Pressable } from 'react-native'
import { signInWithEmailPassword } from '../authService';
import React, { useState } from 'react'

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

export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
          await signInWithEmailPassword(email, password);
          Alert.alert('Login successful');
        } catch (error) {
          Alert.alert('Login failed');
        }
      };
    
    return (
            <>
                <Text style={styles.Text}>Авторизация</Text>
                <TextInput placeholder='Email' value={email} onChangeText={setEmail} style={styles.AuthInput}></TextInput>
                <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry style={styles.AuthInput}></TextInput>
                <Pressable onPress={handleSignIn} style={styles.AuthButton}>
                    <Text style={{color: 'white', position: 'relative', top:'30%', fontWeight: 600, fontSize: 18}}>
                        Войти
                    </Text>
                </Pressable>
            </>
  )
}

export default LoginForm