import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MyTheme } from "../../theme";
import VisaLogo from "../../assets/images/methods/visa.png";
import MasterCardLogo from "../../assets/images/methods/master_card.png";
import Typography from "../Typography";
import UnSelected from "../../assets/images/methods/unselected.png";
import Selected from "../../assets/images/methods/selected.png";
import { Image } from "expo-image";

const PaymentMethod = ({ method, isSelected = false, details }) => {
  return (
    <TouchableOpacity style={[styles.container, isSelected && styles.active]}>
      <View
        style={{
          flex: 0.8,
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Image
          source={method === "visa" ? VisaLogo : MasterCardLogo}
          style={{ width: 46, aspectRatio: 1 }}
          contentFit="contain"
        />
        <Typography text={details} size={12} fontFamily="jakarta-semi-bold" />
      </View>
      <Image
        source={isSelected ? Selected : UnSelected}
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export default PaymentMethod;
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 19,
    width: "100%",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: MyTheme.line,
    minHeight: 67,
    paddingLeft: 34,
  },
  active: {
    borderColor: MyTheme.primary,
  },
});
