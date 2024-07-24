import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ArrowLeft from "../../components/icon/ArrowLeft";
import Typography from "../../components/Typography";
import { i18n } from "@/i18n";
import { MyTheme } from "../../theme";
import { router } from "expo-router";
import { product_detail } from "../../mock/_products";
import Detail from "../../components/layout/product-details/Detail";
import Size from "../../components/layout/product-details/Size";
import Description from "../../components/layout/product-details/Description";
import Seller from "../../components/layout/product-details/Seller";
import SimilarProducts from "../../components/layout/product-details/SimilarProducts";
import MoreDetails from "../../components/layout/product-details/MoreDetails";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const ProductDetail = () => {
  const insets = useSafeAreaInsets();

  const checkout = () => {
    router.push("/(tabs)/checkout");
  };

  const goBack = () => {
    router.back();
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.secondContainer}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingTop: 40,
            paddingBottom: 150,
          }}
        >
          <View style={styles.header}>
            <TouchableOpacity style={{ flex: 0.1 }} onPress={goBack}>
              <ArrowLeft />
            </TouchableOpacity>
            <View
              style={{
                flex: 0.8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                text={`${i18n.t("product_detail.product_details")}`}
                fontFamily="ploni-bold"
                size={18}
              />
            </View>
            <View
              style={{
                flex: 0.1,
              }}
            ></View>
          </View>

          <Detail productData={product_detail} />
          <Size productData={product_detail} />
          <Description productData={product_detail} />
          <Seller productData={product_detail} />
          <MoreDetails producData={product_detail} />
          <SimilarProducts producData={product_detail} />
        </ScrollView>
      </SafeAreaView>
      <View style={[styles.bottomContainer, { paddingBottom: insets.bottom }]}>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Typography
            text={i18n.t("product_detail.price")}
            size={16}
            fontFamily="ploni-medium"
            color={MyTheme.grayscale_70}
          />
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <Typography
              text={`${product_detail?.realPrice}₪`}
              size={12}
              fontFamily="ploni-regular"
              color={MyTheme.grayscale_80}
              textDecorationLine="line-through"
              textDecorationStyle="solid"
            />
            <Typography
              text={`${product_detail?.discountedPrice}₪`}
              size={16}
              fontFamily="ploni-regular"
              color={MyTheme.dark}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.join_group} onPress={checkout}>
          <Typography
            text={i18n.t("product_detail.join_group")}
            size={16}
            fontFamily="ploni-semi-bold"
            color={MyTheme.line_black}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyTheme.white,
    position: "relative",
  },
  secondContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
    paddingHorizontal: 24,
  },
  bottomContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    minHeight: 144,
    backgroundColor: MyTheme.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  join_group: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 24,
    backgroundColor: MyTheme.alert_success,
    justifyContent: "center",
    alignItems: "center",
  },
});
