import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Text, Input, Button } from "react-native-elements";
import { useFonts } from "expo-font";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.signUpContainer}>
      <Text h3 style={styles.title}>
        Sign Up for Tracker
      </Text>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
        leftIcon={
          <Feather
            name="mail"
            size={20}
            color="#999"
            style={{ marginHorizontal: 10 }}
          />
        }
        style={styles.inputMail}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry
        leftIcon={
          <Feather
            name="key"
            size={20}
            color="#999"
            style={{ marginHorizontal: 10 }}
          />
        }
        style={styles.inputPassword}
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          buttonStyle={{
            backgroundColor: "#3a86ff",
            width: 200,
            marginTop: 25,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 100,
  },
  title: {
    color: "#5e60ce",
    marginBottom: 40,
  },
});

export default SignupScreen;
