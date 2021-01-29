import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const NavLink = ({ textLink, toggleSignPage }) => {
  return (
    <>
      <TouchableOpacity style={styles.goToSignIn} onPress={toggleSignPage}>
        <Text>{textLink}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  goToSignIn: {
    marginTop: 30,
    color: "#5e60ce",
    fontSize: 18,
  },
});

export default NavLink;
