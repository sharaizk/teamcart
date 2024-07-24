import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { i18n } from "@/i18n";
import Typography from "../../Typography";
import { Image } from "expo-image";
import { MyTheme } from "../../../theme";
const Seller = ({ productData, variant = "" }) => {
  return (
    <View
      style={[
        styles.container,
        variant === ""
          ? {
              paddingHorizontal: 14,
              paddingVertical: 16,
              borderBottomWidth: 4,
              borderBottomColor: "#F2F3F7",
            }
          : {},
      ]}
    >
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 15,

          flexDirection: "row",
        }}
      >
        <Image
          source={productData?.seller?.avatar}
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
          }}
        />

        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            text={productData?.seller?.name}
            fontFamily="ploni-semi-bold"
            color={MyTheme.line_black}
          />
          <Typography
            text={i18n.t("product_detail.online_ago")}
            fontFamily="ploni-regular"
            color={MyTheme.grayscale_70}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.followBtn}>
        <Typography
          text={i18n.t("product_detail.follow")}
          color={MyTheme.yellow}
          size={12}
          fontFamily="ploni-semi-bold"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Seller;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
  followBtn: {
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: MyTheme.yellow,
  },
});
