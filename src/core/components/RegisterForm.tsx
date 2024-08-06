import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native'
import { registerWithEmailPassword, createNotesCollectionForUser } from '../authService';
import React, { useState } from 'react'
import  authStore  from '../mobx/authStore';

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


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
export const RegisterForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignUp = async () => {
      try {
        Alert.alert('Registration successful');
      } catch (error) {
        Alert.alert('Registration failed');
      }
    };
  
    return (
      <View>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.AuthInput} />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.AuthInput} secureTextEntry />
        <Pressable style={styles.AuthButton} onPress={handleSignUp}>
            <Text style={{color: 'white', position: 'relative', top:'30%', fontWeight: 600, fontSize: 18}}>
            Зарегистрироваться
            </Text>
        </Pressable>
      </View>
    );
  };
  

export default RegisterForm