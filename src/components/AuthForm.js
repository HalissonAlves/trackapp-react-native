import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Text, Button, Input } from "react-native-elements";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Text h3 style={styles.title}>
        {headerText}
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

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Button
        title={submitButtonText}
        onPress={() => onSubmit({ email, password})}
        buttonStyle={{
          backgroundColor: "#3a86ff",
          width: 200,
          marginTop: 25,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#5e60ce",
    marginBottom: 40,
  },
  errorMessage: {
    color: "red",
  },
});

export default AuthForm;
