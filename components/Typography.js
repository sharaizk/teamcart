import { View, Text } from "react-native";
import React from "react";
import { getFontSize } from "../helpers/fontSize";
const Typography = ({
  text = "",
  color = "",
  fontFamily = "",
  textAlign = "",
  size = 16,
  ...props
}) => {
  return (
    <Text
      style={{
        color: color,
        fontFamily: fontFamily,
        textAlign: textAlign,
        fontSize: getFontSize(size),
        ...props,
      }}
    >
      {text}
    </Text>
  );
};

export default Typography;
