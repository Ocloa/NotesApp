
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';


const ListItem = () => {
  return (
    <Pressable
      style={styles.view}>
        <Text>List Item</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create( {
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        minHeight: '10%',
        maxHeight: '15%',
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#EEEEEE',
        backgroundColor: 'rgba(255,255,255,0.7)',
    }
})

export default ListItem;