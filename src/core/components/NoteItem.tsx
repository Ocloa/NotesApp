import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItem = () => {
  return (
    <View
      style={styles.view}>
        <Text>List Item</Text>
    </View>
  );
};

const styles = StyleSheet.create( {
    view: {
        flexDirection: 'row',
        width: 200,
        minHeight:40,
        padding: 5,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,255,255,0.7)',
        shadowRadius: 50,
        shadowColor: 'white'
    }
})

export default ListItem;