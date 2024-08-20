import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { registerWithEmailPassword } from '../authService';
import LinearGradient from 'react-native-linear-gradient';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await registerWithEmailPassword(email, password);
      Alert.alert('Registration successful');
    } catch (error) {
      Alert.alert('Registration failed');
    }
  };

  const styles = StyleSheet.create({
    AuthInput: {
        height:'10%',
        width:'60%', 
        alignSelf: 'center',
        padding: 10, 
        borderWidth: 1, 
        borderRadius: 10, 
        borderColor: 'lightgray', 
        backgroundColor: 'white', 
        opacity: 0.75
    },
    AuthButton: {
      height:'10%', 
      width:'60%',
      alignSelf: 'center', 
      borderWidth:2, 
      borderRadius: 10, 
      alignItems: 'center', 
      backgroundColor: 'rgba(48, 79, 95, 1)', 
      borderColor: '#FFFFFF'
    },
    Text: {
        fontWeight: 600,
        fontSize: 18,
        color: '#fff'
    }

  })

  return (
    <View style={{flex:1,  justifyContent: 'center', alignItems: 'center', backgroundColor: '#F1F8F9'}}>
      <LinearGradient colors={['#F1F8F1', '#F1F8F9']} start={{x: 0, y:0.5}} style={{flex:0.5, borderRadius: 10, width:'100%', justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ borderWidth: 2, borderColor: '#FFFFFF', borderRadius: 10, flex:1, flexDirection: 'column', width: '70%', justifyContent: 'center', alignItems:'center', gap:15, backgroundColor:'rgba(255, 241, 243, 0.5)'}}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.AuthInput} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.AuthInput} secureTextEntry />
      <TouchableOpacity onPress={handleSignUp} style={[{alignSelf: 'center'}, styles.AuthButton]}>
        <Text style={[styles.Text, {paddingTop: 5}]}>
        Регистрация
        </Text>
      </TouchableOpacity>
      </View>
      </LinearGradient>
    </View>
  );
};

export default SignUp;