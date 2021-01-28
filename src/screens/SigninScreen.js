import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SigninScreen = ({ navigation }) => (
  <View>
    <Text>SigninScreen</Text>
    <Button
      title="Go to Signup"
      onPress={() => navigation.navigate("SignUp")}
    />
  </View>
);

const styles = StyleSheet.create({});

export default SigninScreen;
