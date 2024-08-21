/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import FeedScreen from '../src/core/screens/FeedScreen'
import CreateNoteScreen from './core/screens/CreateNoteScreen';
import LoginScreen from './core/screens/LoginScreen';
import RegisterScreen from './core/screens/RegisterScreen';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import authStore from './core/mobx/authStore';

const Drawer = createDrawerNavigator();

type DrawerContentNavigationProp = StackNavigationProp<any>;

export type RootStackParamList = {
  Home: undefined;
  NewNote: undefined;
  Login: undefined;
  Register: undefined;
};

interface CustomDrawerContentProps {
  navigation: DrawerContentNavigationProp;
}


const CustomDrawerContent = observer(({ navigation }: CustomDrawerContentProps) => {

  function navigateIfAuthenticated(screenName: keyof RootStackParamList, params = {}) {
    if (!authStore.isAuthenticated) {
      // Перенаправление на экран авторизации, если пользователь не авторизован
      navigation.navigate('Login', { screen: 'Register' }); // Пример навигации на экран регистрации после входа
    } else {
      // Навигация на запрошенный экран, если пользователь авторизован
      navigation.navigate(screenName, params);
    }
  }
  return (
    <DrawerContentScrollView style={{backgroundColor: '#EFF1F3', flex:1}}>
      <View>
        <Text style={styles.emailText}>{authStore.user?.email}</Text>
      </View>
      <View style={styles.menuContainer}>
      {authStore.isAuthenticated && (     
        <>
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
                  navigateIfAuthenticated('Home');
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
                  navigateIfAuthenticated('NewNote');
                }}
              />
            </View>
        </View> 
        </> 
         )}
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#304F5F' },
          ]}>
            {!authStore.isAuthenticated && (
            <View style={{flex:1}}>
            <DrawerItem
              label="Log in"
              labelStyle={{color: '#EFF1F3'}}
              style={{flex: 1}}
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </View>
            )}
        </View>
        {!authStore.isAuthenticated && (
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
                navigation.navigate('Register');
              }}
            />
          </View>
      </View>
        )}
        {authStore.isAuthenticated && (
          <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#304F5F' },
          ]}>
            <View style={{flex:1}}>
            <DrawerItem
              label="Logout"
              labelStyle={{color: '#EFF1F3'}}
              style={{flex: 1}}
              onPress={() => {
                authStore.logout()
                navigation.navigate('Login')}}
            />
            </View>
        </View>
        )}

      </View>
    </DrawerContentScrollView>
  );
})

function DrawerNavigator(){
  return(
    <Drawer.Navigator drawerContent={ () => <CustomDrawerContent navigation={useNavigation()}/>} initialRouteName="Home">
      <Drawer.Screen name="Home" component={FeedScreen} options={{title: "Главная страница"}}/>
      <Drawer.Screen name="NewNote" component={CreateNoteScreen} options={{title: "Новая заметка"}} initialParams={{noteId: ''}}/>
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
  logoutButton: {
    position: 'relative',
    marginTop: 10,
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#304F5F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#EFF1F3',
    fontSize: 16,
  },
  emailText: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#304F5F',
  },
});
export default App;
