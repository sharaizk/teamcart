import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import PaymentSuccess from "../../assets/images/methods/payment_success.png";
import { Image } from "expo-image";
import { MyTheme } from "../../theme";
import { i18n } from "@/i18n";
import Button from "../Button";
import Typography from "../Typography";
import { router } from "expo-router";
const OrderSuccessfull = ({ continueFn = null }) => {
  const continute = () => {
    if (continueFn) {
      continueFn();
    } else {
      router.replace("/(tabs)/");
    }
  };
  return (
    <BlurView intensity={25} style={styles.blurContainer}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            source={PaymentSuccess}
            style={{
              height: 120,
              width: 120,
            }}
            contentFit="contain"
          />
          <View
            style={{
              width: "100%",
              gap: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              text={i18n.t("checkout.order_successful")}
              size={24}
              fontFamily="ploni-bold"
              color={MyTheme.grayscale_100}
            />
            <Typography
              text={i18n.t("checkout.success_desc")}
              size={14}
              fontFamily="ploni-medium"
              color="#6C6C6C"
              textAlign="center"
              width={300}
            />
          </View>
          <Button borderRadius={24} minHeight={56} onPress={continute}>
            <Typography
              text={i18n.t("checkout.continue")}
              size={16}
              fontFamily="ploni-medium"
              color={MyTheme.secondary_dark}
              textAlign="center"
            />
          </Button>
        </View>
      </View>
    </BlurView>
  );
};

export default OrderSuccessfull;
const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    width: "100%",
  },
  container: {
    backgroundColor: "rgba(31, 29, 43, 0.24)",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    padding: 24,
  },
  contentContainer: {
    width: "100%",
    backgroundColor: MyTheme.white,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 10,
    gap: 30,
  },
});
