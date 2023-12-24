import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Link, Stack, router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const onboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome to #DEVember",
    description: "Daily React Native tutorials during December.",
  },
  {
    icon: "people-arrows",
    title: "Learn and grow together",
    description:
      "Learn React Native and build a community with other developers.",
  },
  {
    icon: "people-arrows",
    title: "Education for Children",
    description:
      "Contribute to  the fundraiser Education for Children to help Save the Children.",
  },
];
export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      setScreenIndex(0);
      router.back();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const onSkip = () => {
    setScreenIndex(0);
    router.back();
  };
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen
        options={{ headerShown: false, title: "Day 2: Onboarding" }}
      />
      <StatusBar style="light" />
      <View style={styles.pageContent}>
        <View style={styles.stepIndicatorContainer}>
          {onboardingSteps.map((step, index) => (
            <View
              style={[
                styles.stepIndicator,
                { backgroundColor: index === screenIndex ? "#CEF202" : "gray" },
              ]}
            ></View>
          ))}
        </View>
        <FontAwesome5
          name={data.icon}
          size={100}
          color="#CEF202"
          style={styles.image}
        />
        <View style={styles.footer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <View style={styles.buttonRow}>
            <Text style={styles.buttonText} onPress={onSkip}>
              Skip
            </Text>
            <Pressable onPress={() => onContinue()} style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  title: {
    color: "#fdfdfd",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "InterBlack",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 18,
    fontFamily: "InterRegular",
    lineHeight: 28,
  },
  buttonRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  buttonText: {
    color: "#fdfdfd",
    fontFamily: "InterSemi",
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
  button: {
    backgroundColor: "#302E38",
    borderRadius: 50,
    flex: 1,
    alignItems: "center",
  },
  footer: {
    marginTop: "auto",
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    gap:8,
    paddingHorizontal: 10,
  },
  stepIndicator: {
    flex: 1,
    backgroundColor: "gray",
    height: 3,
    borderRadius: 10,
  },
});
