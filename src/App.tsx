/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import FeedScreen from '../src/core/screens/FeedScreen'
import CreateNoteScreen from './core/screens/CreateNoteScreen';
import LoginScreen from './core/screens/LoginScreen';
import RegisterScreen from './core/screens/RegisterScreen';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Drawer = createDrawerNavigator();


function CustomDrawerContent(props: any){

  return (
    <DrawerContentScrollView style={{backgroundColor: '#EFF1F3', flex:1}} {...props}>
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
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#304F5F' },
          ]}>
            <View style={{flex:1}}>
              <DrawerItem
                label="Register"
                labelStyle={{color: '#EFF1F3'}}
                style={{flex: 1}}
                onPress={() => {
                  props.navigation.navigate('Register');
                }}
              />
            </View>
        </View>
      </View>
      <Pressable style={{position:'absolute', bottom: 0,}}>
        <Text>
          Logout
        </Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

function DrawerNavigator(){
  return(
    <Drawer.Navigator drawerContent={ (props) => <CustomDrawerContent {...props}/>} initialRouteName="Home">
      <Drawer.Screen name="Home" component={FeedScreen} options={{title: "Главная страница"}}/>
      <Drawer.Screen name="New Note" component={CreateNoteScreen} options={{title: "Новая заметка"}}/>
      <Drawer.Screen name='Login' component={LoginScreen} options={{title: "Авторизация"}}/>
      <Drawer.Screen name='Register' component={RegisterScreen} options={{title: "Регистрация"}}/>
    </Drawer.Navigator>
  )
};

function App(): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);
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
