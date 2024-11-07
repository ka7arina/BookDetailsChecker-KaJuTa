import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import LoginService from "../../services/LoginService";
import styles from "../../constants/Styles";
import Colors from "../../constants/Colors";
import * as Updates from 'expo-updates';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigation: any = useNavigation();

  const handleReload = async () => {
    await Updates.reloadAsync();
  };

  const handleLogin = async () => {
    try {
      const data = await LoginService.login(email, password);
      console.log("Login successful", data.accessToken, data.user);
      await handleReload();

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const createBook = () => {
    navigation.navigate('Home');
};

  return (
    <View style={pageStyles.container}>
      <Text style={[styles.welcomeText, pageStyles.title]}>
        Book Crux Library
      </Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        style={pageStyles.input}
        theme={{ colors: { primary: Colors.light.greenDark } }}
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        mode="outlined"
        secureTextEntry
        style={pageStyles.input}
        theme={{ colors: { primary: Colors.light.greenDark } }}
      />

      {error ? <Text style={pageStyles.error}>{error}</Text> : null}

      <Button mode="contained" onPress={handleLogin} style={pageStyles.button}>
        Sign in
      </Button>
    </View>
  );
};

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: styles.fontSize.header,
    color: Colors.light.greenDark,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    backgroundColor: Colors.light.offWhite,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: Colors.light.greenMedium,
    borderRadius: styles.radius.button,
  },
  error: {
    color: Colors.light.greenDark,
    textAlign: "center",
    marginTop: 10,
    fontSize: styles.fontSize.authMessage,
  },
});

export default LoginPage;
