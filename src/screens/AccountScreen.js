import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "@react-navigation/native";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  
  return (
    <View style={styles.containerButton}>
      <Button title="Sign Out" onPress={signout} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AccountScreen;
