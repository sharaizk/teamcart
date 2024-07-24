import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";
import SplashImage from "../assets/images/splash.png";
const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={SplashImage} style={{ flex: 1 }} contentFit="cover" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
