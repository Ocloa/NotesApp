import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { signInWithEmailPassword } from '../authService';
import { useNavigation } from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    // Очистка текстовых полей при монтировании компонента
    setEmail('');
    setPassword('');
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithEmailPassword(email, password);
      setEmail('');
      setPassword('');
      Alert.alert('Login successful');
      navigation.navigate('Home')
    } catch (error) {
      Alert.alert('Login failed');
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default LoginScreen;