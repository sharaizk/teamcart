import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { i18n } from "@/i18n";
import Typography from "../../Typography";
import { MyTheme } from "../../../theme";
import { useState } from "react";
import CheckIcon from "../../icon/CheckIcon";

import ChevDown from "../../icon/ChevDown";
const Size = ({ productData }) => {
  const colors = productData?.colors || [];
  const [activeColor, setActiveColor] = useState(colors[0]);
  return (
    <View style={styles.container}>
      <Typography
        text={i18n.t("product_detail.product_details")}
        fontFamily="ploni-bold"
        size={16}
      />
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderRadius: 30,
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
            padding: 10,
            backgroundColor: MyTheme.white,
            shadowColor: "rgba(0, 0, 0, 0.10)",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 20,
            elevation: 20,
          }}
        >
          <ChevDown />
          <Typography text={i18n.t("product_detail.size")} />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderRadius: 30,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            padding: 10,
            backgroundColor: MyTheme.white,
            shadowColor: "rgba(0, 0, 0, 0.10)",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 20,
            elevation: 20,
          }}
        >
          {colors?.map((color, index) => (
            <TouchableOpacity
              key={`color-${index}`}
              style={{
                width: 20,
                height: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: color,
                borderRadius: 10,
                borderWidth: color?.toLowerCase() === "#ffffff" ? 1 : 0,
                borderColor:
                  color?.toLowerCase() === "#ffffff"
                    ? MyTheme.grayscale_50
                    : "",
              }}
              onPress={() => setActiveColor(color)}
            >
              {color === activeColor && <CheckIcon />}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Size;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 16,
    borderBottomWidth: 4,
    borderBottomColor: "#F2F3F7",
  },
});
