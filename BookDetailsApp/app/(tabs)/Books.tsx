import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
import styles from '../../constants/Styles';
import FilterBar from '../../components/FilterBar'
import BookCard from "@/components/BookCard";


export default function BookScreen() {
  return (
    <PaperProvider>
      <View style={pageStyles.container}>
        <FilterBar/>
        <BookCard/>
        <BookCard/>
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
