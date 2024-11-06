import React from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import '../../assets/images/background-image.png';
import {Card} from 'react-native-paper';

export default function HomeScreen() {
  return (
      <PaperProvider>
        <ImageBackground
            source={require('../../assets/images/background-image.png')}
            style={styles.background}
        >
          <View style={styles.container}>
              <Card>
                  <Card.Content>
                      <Text style={styles.title}>Welcome to the
                          Book Crux Library </Text>
                  </Card.Content>
              </Card>
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
  cardContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
