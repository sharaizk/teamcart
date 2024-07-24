import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MyTheme } from "../../theme";
import HeartIconOutlined from "../icon/HeartIconOutlined";
import HeartIcon from "../icon/HeartIcon";
import TimeIcon from "../icon/TimeIcon";
import Typography from "../Typography";
import { Image } from "expo-image";
import { i18n } from "@/i18n";
import UsersIcon from "../icon/UsersIcon";

const FavouriteCard = ({
  time = "",
  title = "",
  discount = 0,
  realPrice = 0,
  discountedPrice = 0,
  delivered = 0,
  totalAvailable = 0,
  image = "",
  isLiked = true,
  onPress = () => {},
  width = "48.5%",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width: width }]}
      activeOpacity={0.8}
    >
      <View style={styles.head}>
        <TouchableOpacity style={styles.likeBtn}>
          {isLiked && <HeartIcon activeFill="alert_error" isActive={isLiked} />}
          {!isLiked && <HeartIconOutlined />}
        </TouchableOpacity>
        <View style={styles.remainingTime}>
          <Typography text={time} size={10} fontFamily="ploni-bold" />
          <TimeIcon />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} contentFit="contain" />
      </View>
      <Typography text={title} size={12} fontFamily="ploni-semi-bold" />
      <View
        style={{
          justifyContent: "justify-start",
          alignItems: "center",
          gap: 5,
          flexDirection: "row",
          width: "100%",
          marginTop: 4,
          flexWrap: "wrap",
        }}
      >
        <View style={styles.discountTag}>
          <Typography
            text={`${i18n.t("groups.discount_off")} ${discount}%`}
            color={MyTheme.primary}
            size={10}
            fontFamily="ploni-medium"
          />
        </View>
        <View>
          <Typography
            text={`${realPrice}₪`}
            color={MyTheme.grayscale_80}
            size={10}
            fontFamily="ploni-semi-bold"
          />
        </View>
        <View>
          <Typography
            text={`${discountedPrice}₪`}
            color={MyTheme.line_black}
            size={12}
            fontFamily="ploni-semi-bold"
          />
        </View>
      </View>

      <View
        style={{
          justifyContent: "justify-start",
          alignItems: "center",
          gap: 11,
          flexDirection: "row",
          width: "100%",
          marginTop: 4,
        }}
      >
        <Typography
          text={`${delivered}/${totalAvailable}`}
          color={MyTheme.secondary_dark}
          size={12}
          fontFamily="ploni-medium"
        />
        <UsersIcon />
      </View>
    </TouchableOpacity>
  );
};

export default FavouriteCard;

const styles = StyleSheet.create({
  container: {
    minHeight: 244,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: MyTheme.primary,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 5,
  },
  head: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  likeBtn: {
    padding: 6,
    borderRadius: 30,
    backgroundColor: MyTheme.secondary,
  },
  remainingTime: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    backgroundColor: MyTheme.primary,
    borderRadius: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: 121,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  discountTag: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: MyTheme.dark,
    borderRadius: 36,
  },
});
