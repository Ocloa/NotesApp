import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { registerWithEmailPassword } from '../authService';

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

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUp;