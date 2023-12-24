import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DayDetail = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Devember Day 1" }} />
      <Text style={styles.text}>detail 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#9b4521",
    fontSize: 100,
    fontFamily: "AmaticBold",
  },
});

export default DayDetail;
