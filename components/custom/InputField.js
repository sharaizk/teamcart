import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { MyTheme } from "../../theme";
import { getFontSize } from "../../helpers/fontSize";
import { Feather } from "@expo/vector-icons";

const InputField = ({
  placeholder = "",
  variant = "primary",
  value = "",
  onChange = () => {},
  keyboardType = "default",
  type = "default",
}) => {
  const [secure, setSecure] = useState(false);
  useEffect(() => {
    if (type === "password") {
      setSecure(true);
    }
  }, [type]);
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        placeholder={placeholder}
        style={{
          width: "80%",
          direction: "rtl",
          textAlign: "right",
          color: MyTheme.grayscale_100,
          fontFamily: "ploni-medium",
          fontSize: getFontSize(16),
        }}
        secureTextEntry={secure}
      />
      {type === "password" && secure && (
        <TouchableOpacity onPress={() => setSecure(false)}>
          <Feather name="eye" size={18} color={MyTheme.grayscale_500} />
        </TouchableOpacity>
      )}
      {type === "password" && !secure && (
        <TouchableOpacity onPress={() => setSecure(true)}>
          <Feather name="eye-off" size={18} color={MyTheme.grayscale_500} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    backgroundColor: MyTheme.grayscale_50_2,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 8,
    minHeight: 56,
  },
});
