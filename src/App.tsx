/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';

import FeedScreen from '../src/core/screens/FeedScreen'
import CreateNoteScreen from './core/screens/CreateNoteScreen';
import AuthScreen from './core/screens/AuthScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any){

  return (
    <DrawerContentScrollView style={{backgroundColor: '#EFF1F3'}} {...props}>
      <View>
        <Text>*User Info*</Text>
      </View>
      <View style={styles.menuContainer}>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#304F5F' },
          ]}>
            <View style={{flex:1}}>
              <DrawerItem
                label="Home"
                labelStyle={{color: '#EFF1F3'}}
                style={{flex: 1}}
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />
            </View>
        </View>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#304F5F' },
          ]}>
            <View style={{flex:1}}>
              <DrawerItem
                label="New Note"
                labelStyle={{color: '#EFF1F3'}}
                style={{flex: 1}}
                onPress={() => {
                  props.navigation.navigate('New Note');
                }}
              />
            </View>
        </View>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#304F5F' },
          ]}>
            <View style={{flex:1}}>
              <DrawerItem
                label="Log in"
                labelStyle={{color: '#EFF1F3'}}
                style={{flex: 1}}
                onPress={() => {
                  props.navigation.navigate('Login');
                }}
              />
            </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

function DrawerNavigator(){
  return(
    <Drawer.Navigator drawerContent={ (props) => <CustomDrawerContent {...props}/>} initialRouteName="Home">
      <Drawer.Screen name="Home" component={FeedScreen} options={{title: "Главная страница"}}/>
      <Drawer.Screen name="New Note" component={CreateNoteScreen} options={{title: "Новая заметка"}}/>
      <Drawer.Screen name='Login' component={AuthScreen} options={{title: "Авторизация"}}/>
    </Drawer.Navigator>
  )
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF1F3'
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap:1
  },
  menuItemsCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
