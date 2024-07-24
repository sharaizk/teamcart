import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { MyTheme } from "../../theme";
import ShareIcon from "../icon/ShareIcon";
import InfoIcon from "../icon/InfoIcon";
import Typography from "../Typography";
import TimeIcon from "../icon/TimeIcon";
import UsersIcon from "../icon/UsersIcon";
import Seller from "../layout/product-details/Seller";
import DashedLine from "react-native-dashed-line";
import { Image } from "expo-image";
import { i18n } from "@/i18n";
import { SCREENWIDTH } from "../../constants/Sizes";

import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated";
import { router } from "expo-router";
const SCREEN_POSITION = SCREENWIDTH - 90;
const SwipeCard = ({ productData, style, scrollX, index, activeItem }) => {
  const CARD_POSITION = index * SCREEN_POSITION;
  const goToProductDetail = () => {
    router.push("/(tabs)/product_detail");
  };
  const backgroundColorStyles = useAnimatedStyle(() => {
    const isActive = activeItem.value === index;
    const backgroundColor = interpolateColor(
      scrollX.value,
      [
        CARD_POSITION - SCREEN_POSITION,
        CARD_POSITION - 100,
        CARD_POSITION,
        CARD_POSITION + 100,
        CARD_POSITION + SCREEN_POSITION,
      ],
      [MyTheme.white, "#02AC32", MyTheme.white, "#FF0000", MyTheme.white]
    );

    return {
      backgroundColor: isActive ? backgroundColor : MyTheme.white,
    };
  });
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={goToProductDetail}>
      <Animated.View style={[styles.container, style, backgroundColorStyles]}>
        <View style={styles.imageContainer}>
          <Image
            source={productData?.image}
            style={{ width: "100%", aspectRatio: 2, maxHeight: 216 }}
            contentFit="contain"
          />
          <TouchableOpacity style={styles.rightButton}>
            <InfoIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.leftButton}>
            <ShareIcon />
          </TouchableOpacity>
        </View>
        <View
          style={{
            gap: 28,
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              gap: 11,
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                justifyContent: "justify-start",
                alignItems: "center",
                gap: 11,
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={styles.discountTag}>
                <Typography
                  text={`${i18n.t("groups.discount_off")} ${
                    productData?.discount
                  }%`}
                  color={MyTheme.primary}
                  size={12}
                  fontFamily="ploni-medium"
                />
              </View>

              <View style={styles.remainingTime}>
                <Typography
                  text={productData?.time}
                  size={12}
                  fontFamily="ploni-bold"
                />
                <TimeIcon />
              </View>
            </View>
            <Typography
              text={productData?.title}
              size={18}
              fontFamily="ploni-semi-bold"
              color="#1A162E"
            />

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
                text={`${productData?.delivered}/${productData?.totalAvailable}`}
                color={MyTheme.secondary_dark}
                size={12}
                fontFamily="ploni-medium"
              />
              <UsersIcon />
            </View>
          </View>

          <Seller productData={productData} variant="min" />

          <View style={styles.priceContainer}>
            <Text
              ellipsizeMode="clip"
              numberOfLines={1}
              accessible={false}
              style={{ color: "#66707A" }}
            >
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            </Text>

            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Typography
                text={i18n.t("product_detail.price")}
                color={MyTheme.line_black}
                size={16}
                fontFamily="ploni-semi-bold"
              />
              <View
                style={{
                  flex: 0.5,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <View>
                  <Typography
                    text={`${productData?.realPrice}₪`}
                    color={MyTheme.grayscale_80}
                    size={12}
                    fontFamily="ploni-semi-bold"
                  />
                </View>
                <View>
                  <Typography
                    text={`${productData?.discountedPrice}₪`}
                    color={MyTheme.line_black}
                    size={16}
                    fontFamily="ploni-semi-bold"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default SwipeCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 31,
    borderWidth: 1,
    borderColor: MyTheme.primary,
    borderRadius: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    direction: "ltr",
  },
  imageContainer: {
    width: "100%",
    position: "relative",
  },
  leftButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  rightButton: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  discountTag: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: MyTheme.dark,
    borderRadius: 36,
    minHeight: 28,
    justifyContent: "center",
    alignItems: "center",
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
  priceContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
  },
});
