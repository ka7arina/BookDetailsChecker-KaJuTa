import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
import styles from '../../constants/Styles';


export default function BookScreen() {
  return (
    <PaperProvider>
      <View style={pageStyles.container}>
        <Text style={[styles.welcomeText, { color: styles.cardTitle.color }]}>Welcome to the Book Details App</Text>
      </View>
    </PaperProvider>
  );
}
  
const pageStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
