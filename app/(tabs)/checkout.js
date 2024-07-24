import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { MyTheme } from "../../theme";
import { ScrollView } from "react-native-gesture-handler";
import Typography from "../../components/Typography";
import ArrowLeft from "../../components/icon/ArrowLeft";
import { i18n } from "@/i18n";
import { router } from "expo-router";
import ArrowCircleRight from "../../components/icon/ArrowCircleRight";
import PaymentMethod from "../../components/cards/PaymentMethod";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import OrderSuccessfull from "../../components/cards/OrderSuccessfull";
import Overlay from "react-native-modal-overlay";
import { useState } from "react";

const Checkout = () => {
  const insets = useSafeAreaInsets();
  const [overlayVisible, setOverlayVisible] = useState(false);
  const goBack = () => {
    router.back();
  };
  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };
  const closeOverlay = () => {
    setOverlayVisible(false);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.secondContainer}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingTop: 20,
            paddingBottom: 150,
            paddingHorizontal: 24,
            gap: 20,
          }}
        >
          <View style={styles.header}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 48,
                width: 48,
                backgroundColor: "#ececee",
                borderRadius: 24,
              }}
              onPress={goBack}
            >
              <ArrowLeft />
            </TouchableOpacity>
            <View
              style={{
                flex: 0.85,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                text={`${i18n.t("checkout.checkout")}`}
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

          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16,
            }}
          >
            <Typography
              text={i18n.t("checkout.delivery_location")}
              fontFamily="ploni-bold"
              size={16}
            />
            <View
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
                gap: 40,
              }}
            >
              <View
                style={{
                  gap: 3,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flex: 0.8,
                }}
              >
                <Typography
                  text="Andy Home"
                  fontFamily="ploni-semi-bold"
                  size={14}
                />
                <Typography
                  text="2118 Thornridge Cir. Syracuse, New City, Connecticut 35624"
                  fontFamily="jakarta-medium"
                  size={12}
                  textAlign="left"
                  color={MyTheme.grayscale_70}
                />
              </View>
              <ArrowCircleRight />
            </View>
          </View>
          {/* ORDER ITEMS */}
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16,
            }}
          >
            <Typography
              text={i18n.t("checkout.order_info")}
              size={16}
              fontFamily="ploni-bold"
              color={MyTheme.grayscale_100}
            />

            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Typography
                text="JMS Collection x1"
                size={14}
                fontFamily="ploni-bold"
                color={MyTheme.grayscale_70}
              />
              <Typography
                text={"$24"}
                size={14}
                fontFamily="ploni-bold"
                color={MyTheme.grayscale_100}
              />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Typography
                text="JMS Collection x1"
                size={14}
                fontFamily="ploni-bold"
                color={MyTheme.grayscale_70}
              />
              <Typography
                text={"$24"}
                size={14}
                fontFamily="ploni-bold"
                color={MyTheme.grayscale_100}
              />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Typography
                text="JMS Collection x1"
                size={14}
                fontFamily="ploni-bold"
                color={MyTheme.grayscale_70}
              />
              <Typography
                text={"$24"}
                size={14}
                fontFamily="ploni-bold"
                color={MyTheme.grayscale_100}
              />
            </View>
          </View>

          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 24,
            }}
          >
            {/* PROMO */}
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
                padding: 19,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: MyTheme.line,
              }}
            >
              <TextInput
                style={{
                  width: "90%",
                  textAlign: "right",
                  fontFamily: "ploni-regular",
                }}
                placeholder="PROMO22"
              />
              <TouchableOpacity>
                <Typography
                  text={i18n.t("checkout.add")}
                  color={MyTheme.primary}
                  fontFamily="ploni-medium"
                  size={14}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Typography
                text={i18n.t("checkout.sub_total")}
                size={16}
                fontFamily="ploni-bold"
                color={MyTheme.line_black}
              />
              <Typography
                text={"$172"}
                size={14}
                fontFamily="jakarta-semi-bold"
                color={MyTheme.line_black}
              />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                flexDirection: "row",
                width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: MyTheme.line,
                paddingBottom: 16,
              }}
            >
              <Typography
                text={i18n.t("checkout.shipping")}
                size={16}
                fontFamily="ploni-bold"
                color={MyTheme.line_black}
              />
              <Typography
                text={i18n.t("checkout.free")}
                size={14}
                fontFamily="ploni-medium"
                color={MyTheme.primary}
              />
            </View>

            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Typography
                text={i18n.t("checkout.total")}
                size={20}
                fontFamily="ploni-bold"
                color={MyTheme.line_black}
              />
              <Typography
                text={"$172"}
                size={14}
                fontFamily="jakarta-semi-bold"
                color={MyTheme.line_black}
              />
            </View>

            <View
              style={{
                gap: 10,
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Typography
                text={i18n.t("checkout.payment_method")}
                size={16}
                fontFamily="ploni-bold"
              />
              <PaymentMethod method="visa" details="•••• •••• •••• 87652" />
              <PaymentMethod
                method="master-card"
                details="•••• •••• •••• 87652"
                isSelected
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style={[styles.bottomContainer, { paddingBottom: insets.bottom }]}>
        <TouchableOpacity style={styles.payNow} onPress={toggleOverlay}>
          <Typography
            text={i18n.t("checkout.pay_now")}
            size={16}
            fontFamily="ploni-semi-bold"
          />
        </TouchableOpacity>
      </View>
      <Overlay
        visible={overlayVisible}
        onClose={closeOverlay}
        childrenWrapperStyle={{
          backgroundColor: "transparent",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
        containerStyle={{ backgroundColor: "transparent", padding: 0 }}
      >
        <OrderSuccessfull />
      </Overlay>
    </View>
  );
};

export default Checkout;

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
  },
  bottomContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    minHeight: 120,
    backgroundColor: MyTheme.white,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  payNow: {
    width: "100%",
    backgroundColor: MyTheme.primary,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 56,
    borderRadius: 24,
  },
});
