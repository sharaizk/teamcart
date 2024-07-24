import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import ArrowLeft from "../../components/icon/ArrowLeft";
import Button from "../../components/Button";
import TypoGraphy from "../../components/Typography";
import AppleIcon from "../../components/icon/AppleIcon";
import GoogleIcon from "../../components/icon/GoogleIcon";
import InputField from "../../components/custom/InputField";
import { i18n } from "@/i18n";
import { router } from "expo-router";
import { MyTheme } from "../../theme";
const SignIn = () => {
  const back = () => {
    router.back();
  };
  const signIn = () => {
    router.push({
      pathname: "/(tabs)/",
      params: {
        searchType: "swipe",
      },
    });
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <Button
              width={48}
              borderRadius={24}
              variant="transparent"
              onPress={back}
            >
              <ArrowLeft />
            </Button>
          </View>

          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 3,
              width: "100%",
            }}
          >
            <TypoGraphy
              text={i18n.t("sign_in.title")}
              size={24}
              color={MyTheme.grayscale_90}
              fontFamily="ploni-bold"
            />
            <TypoGraphy
              text={i18n.t("sign_in.subtitle")}
              size={14}
              color={MyTheme.grayscale_70}
              fontFamily="ploni-medium"
            />
          </View>
          <View style={{ width: "100%", marginTop: 19, gap: 16 }}>
            <Button variant="outlined" minHeight={56} borderRadius={12}>
              <AppleIcon />
              <TypoGraphy
                text={i18n.t("sign_in.sign_in_apple")}
                color={MyTheme.secondary_dark}
                size={16}
                fontFamily="ploni-semi-bold"
                textAlign="center"
              />
            </Button>
            <Button variant="outlined" minHeight={56} borderRadius={12}>
              <GoogleIcon />
              <TypoGraphy
                text={i18n.t("sign_in.sign_in_google")}
                color={MyTheme.secondary_dark}
                size={16}
                fontFamily="ploni-semi-bold"
                textAlign="center"
              />
            </Button>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 30,
              width: "100%",
            }}
          >
            <View
              style={{
                flex: 0.4,
                backgroundColor: MyTheme.grayscale_200,
                height: 1,
              }}
            />
            <TypoGraphy
              text={i18n.t("sign_in.or_sign_in")}
              size={14}
              color={MyTheme.grayscale_50}
              fontFamily="ploni-regular"
            />
            <View
              style={{
                flex: 0.4,
                backgroundColor: MyTheme.grayscale_200,
                height: 1,
              }}
            />
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: 24,
            }}
          >
            <InputField placeholder={i18n.t("sign_in.email")} />
            <InputField
              placeholder={i18n.t("sign_in.password")}
              type="password"
            />
            <Button minHeight={56} borderRadius={12} onPress={signIn}>
              <TypoGraphy
                text={i18n.t("sign_in.sign_in")}
                size={16}
                color={MyTheme.secondary_dark}
                fontFamily="ploni-semi-bold"
              />
            </Button>
            <Button variant="transparent">
              <TypoGraphy
                text={i18n.t("sign_in.forgot_password")}
                size={14}
                color={MyTheme.primary}
                fontFamily="ploni-bold"
              />
            </Button>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 5,
            marginTop: 12,
          }}
        >
          <TypoGraphy
            text={i18n.t("sign_in.dont_have_account")}
            color={MyTheme.grayscale_900}
            size={16}
            fontFamily="ploni-medium"
            textAlign="center"
          />
          <TouchableOpacity>
            <TypoGraphy
              text={i18n.t("sign_in.title")}
              color={MyTheme.primary}
              size={16}
              fontFamily="ploni-bold"
              textAlign="center"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },

  topContainer: {
    width: "100%",
    flex: 0.9,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },
});
