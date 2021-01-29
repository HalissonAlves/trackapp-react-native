import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useFocusEffect } from "@react-navigation/native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignIn } = useContext(
    AuthContext
  );

  const [loaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat.ttf"),
  });

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        clearErrorMessage();
      };
    }, [])
  );

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.signUpContainer}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Sign Up"
      />
      <NavLink
        textLink="Alerady have an Account? Go to Sign In"
        toggleSignPage={() => navigation.navigate("SignIn")}
      />
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
});

export default SignupScreen;
