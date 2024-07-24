import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import SwipeImage from "../../assets/images/icons/swipe.png";
const SwipeIcon = ({ height = 24, width = 24 }) => {
  return (
    <Image
      source={SwipeImage}
      style={{
        height: height,
        width: width,
      }}
    />
  );
};

export default SwipeIcon;
