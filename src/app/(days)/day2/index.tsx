import { Link, Stack } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const DayDetail = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <Text style={styles.text}>Detail 2</Text>
      <Link href={"/day2/onboarding"} asChild>
        <Button title="Go to onboarding" />
      </Link>
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
