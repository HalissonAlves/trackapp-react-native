import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TrackListScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>TrackListscreen</Text>
    <Button
      title="Go to Details Page"
      onPress={() => navigation.navigate("TrackDetailScreen")}
    />
  </View>
);

const styles = StyleSheet.create({});

export default TrackListScreen;
