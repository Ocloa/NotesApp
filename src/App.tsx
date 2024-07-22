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

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any){

  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text>*User Info*</Text>
      </View>
      <View style={styles.menuContainer}>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: 'rgba(200, 200, 255, 0.66)' },
          ]}>
          <>
            <View style={{flex:1}}>
              <DrawerItem
                label="Home"
                style={{flex: 1}}
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />
            </View>
          </>
        </View>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: 'rgba(200, 200, 255, 0.66)' },
          ]}>
          <>
            <View style={{flex:1}}>
              <DrawerItem
                label="New Note"
                style={{flex: 1}}
                onPress={() => {
                  props.navigation.navigate('New Note');
                }}
              />
            </View>
          </>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

function DrawerNavigator(){
  return(
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props}/>} initialRouteName="Home">
      <Drawer.Screen name="Home" component={FeedScreen} options={{title: "Главная страница" }}/>
      <Drawer.Screen name="New Note" component={CreateNoteScreen} options={{title: "Новая заметка"}}/>
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
