import { View, Text, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import { MyTheme } from "../theme";
const Button = ({
  children,
  width = "100%",
  minHeight = 10,
  paddingHorizontal = 24,
  paddingVertical = 10,
  variant = "primary",
  justifyContent = "center",
  alignItems = "center",
  activeOpacity = 0.8,
  onPress = () => {},
  ...props
}) => {
  const backgroundColor = useMemo(() => {
    if (variant === "primary") {
      return MyTheme.primary;
    }
    if (variant === "white") {
      return MyTheme.white;
    }
    if (variant === "transparent" || "outlined") {
      return "transparent";
    }
  }, [variant]);

  const outlinedStyles = useMemo(() => {
    if (variant === "outlined") {
      return {
        borderWidth: 1,
        borderColor: MyTheme.grayscale_200,
      };
    }
    return {};
  }, [variant]);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={{
        width: width,
        minHeight: minHeight,
        paddingHorizontal,
        paddingVertical,
        flexDirection: "row",
        gap: 10,
        justifyContent,
        alignItems,
        backgroundColor: backgroundColor,
        ...props,
        ...outlinedStyles,
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
