import React from 'react';
import {StyleSheet, View, ScrollView, ImageBackground} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import FilterBar from '../components/FilterBar';
import BookCard from '../components/BookCard';
import '../assets/images/background-image.png'
import BookButton from '../components/AddBookButton';


// @ts-ignore
export default function BookScreen({ navigation }) {

  const seeDetails = () => {
    // navigation.navigate('');
  }

    return (
        <PaperProvider>
            <ImageBackground
                source={require('../assets/images/background-image.png')}
                style={pageStyles.background}
            >
            <View style={pageStyles.container}>
                <FilterBar />
                <BookButton></BookButton>
                <ScrollView contentContainerStyle={pageStyles.scrollViewContent}>
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </ScrollView>
            </View>
            </ImageBackground>
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

    },
    scrollViewContent: {
        paddingTop: 60,
    },
});
