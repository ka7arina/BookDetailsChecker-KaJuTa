import React from 'react';
import {StyleSheet, View, ScrollView, ImageBackground, Text} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import '../../assets/images/background-image.png'

export default function ProfileScreen() {
    return (
        <PaperProvider>
            <ImageBackground
                source={require('../../assets/images/background-image.png')}
                style={styles.background}
            >
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <Text style={styles.title}>this is the profilepage</Text>
                    </ScrollView>
                </View>
            </ImageBackground>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewContent: {
        paddingTop: 60,
    },
});
