import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

   useFocusEffect(
     React.useCallback(() => {
       return () => clearErrorMessage();
     }, [])
   );

  return (
    <View style={styles.signInContainer}>
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        textLink="Don't have an account? Go to Sign Up"
        toggleSignPage={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 100,
  },
});

export default SigninScreen;
