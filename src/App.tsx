/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, Button} from 'react-native';
import ListItem from '../src/core/components/ListItem';
import SearchBar from '../src/core/components/SearchBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
}

type Props = NativeStackScreenProps<RootStackParamList>; 

function HomeScreen({navigation}: Props): React.JSX.Element {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 50, backgroundColor: 'rgba(200,200,200,0.2)' }}>
      <SearchBar></SearchBar>
      <Text>Home Screen</Text>
      <ListItem/>
      <Button title='Страница деталей'
      onPress={() => navigation.navigate('Details')}/>
    </View>
  )
}

function DetailsScreen({navigation}: Props): React.JSX.Element{
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 50 }}>
      <Text>This is Details Screen</Text>
      <Button title='Домашняя страница'
      onPress={() => navigation.navigate('Home')}/>
    </View>
      
    
  )
}

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Главная страница" }}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
