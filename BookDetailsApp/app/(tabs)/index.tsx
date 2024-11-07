import React from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import '../../assets/images/background-image.png';
import {Card} from 'react-native-paper';
import Colors from "@/constants/Colors";
import {useColorScheme} from "@/components/useColorScheme";

export default function HomeScreen() {
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        title: {
            fontSize: 40,
            textAlign: 'center',
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
            width: 370,
            alignItems: 'center',
            padding:15,
            backgroundColor: Colors[colorScheme ?? 'light'].greenDark,
            borderRadius: 6,
        },

    });


    return (
      <PaperProvider>
        <ImageBackground
            source={require('../../assets/images/background-image.png')}
            style={styles.background}
        >
          <View style={styles.container}>
              <Card style={styles.cardContainer}>
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


