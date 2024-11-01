import  {StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import * as React from "react";
import {Card} from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Text style={styles.title}>Welcome to the
            Book Crux Library </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
