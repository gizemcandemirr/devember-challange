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
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";

import Animated, {
  FadeIn,
  FadeOut,
  BounceInRight,
  SlideOutLeft,
  BounceOutLeft,
  SlideInRight,
} from "react-native-reanimated";

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
    icon: "school",
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

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen
        options={{ headerShown: false, title: "Day 2: Onboarding" }}
      />
      <StatusBar style="light" />
      <GestureDetector gesture={swipes}>
          <View style={styles.pageContent}>
          <Animated.View style={styles.pageAnimateCpntent} entering={FadeIn} exiting={FadeOut} key={screenIndex}>
            <View style={styles.stepIndicatorContainer}>
              {onboardingSteps.map((step, index) => (
                <View
                  style={[
                    styles.stepIndicator,
                    {
                      backgroundColor:
                        index === screenIndex ? "#CEF202" : "gray",
                    },
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
              <Animated.Text
                entering={SlideInRight}
                exiting={SlideOutLeft}
                style={styles.title}
              >
                {data.title}
              </Animated.Text>
              <Animated.Text
                entering={SlideInRight.delay(50)}
                exiting={SlideOutLeft}
                style={styles.description}
              >
                {data.description}
              </Animated.Text>
              <View style={styles.buttonRow}>
                <Text style={styles.buttonText} onPress={endOnboarding}>
                  Skip
                </Text>
                <Pressable onPress={() => onContinue()} style={styles.button}>
                  <Text style={styles.buttonText}>Continue</Text>
                </Pressable>
              </View>
            </View>
            </Animated.View>
          </View>
      </GestureDetector>
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
  pageAnimateCpntent: {
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
    gap: 8,
    paddingHorizontal: 10,
  },
  stepIndicator: {
    flex: 1,
    backgroundColor: "gray",
    height: 3,
    borderRadius: 10,
  },
});
