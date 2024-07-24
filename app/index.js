import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ImageBackground } from "expo-image";
import GetStartedBg from "../assets/images/get-started/get-started-bg.webp";
import React from "react";
import Typography from "../components/Typography";
import { i18n } from "@/i18n";
import { MyTheme } from "@/theme";
import { SimpleLineIcons } from "@expo/vector-icons";
import Button from "../components/Button";
import Email from "../components/icon/Email";
import GoogleIcon from "../components/icon/GoogleIcon";
import { router } from "expo-router";
const Index = () => {
  const goToSignIn = () => {
    router.push("/(auth)/sign-in");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={GetStartedBg}
        alt="get-started-image"
        style={styles.imageBack}
      >
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.contentContainer}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                text={i18n.t("get_started.title")}
                color={MyTheme.white}
                size={30}
                fontFamily="ploni-bold"
                maxWidth={300}
                textAlign="center"
              />
            </View>

            <View
              style={{
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
                flex: 0.5,
                paddingBottom: 8,
                gap: 12,
              }}
            >
              <Button
                variant="primary"
                borderRadius={12}
                minHeight={56}
                onPress={goToSignIn}
              >
                <Email />
                <Typography
                  text={i18n.t("get_started.sign_in_email")}
                  color={MyTheme.secondary_dark}
                  size={16}
                  fontFamily="ploni-semi-bold"
                  textAlign="center"
                />
              </Button>
              <Button variant="white" borderRadius={12} minHeight={56}>
                <GoogleIcon />
                <Typography
                  text={i18n.t("get_started.sign_in_email")}
                  color={MyTheme.secondary_dark}
                  size={16}
                  fontFamily="ploni-semi-bold"
                  textAlign="center"
                />
              </Button>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 5,
                  marginTop: 12,
                }}
              >
                <Typography
                  text={i18n.t("sign_in.dont_have_account")}
                  color={MyTheme.white}
                  size={16}
                  fontFamily="ploni-medium"
                  textAlign="center"
                />
                <TouchableOpacity>
                  <Typography
                    text={i18n.t("get_started.sign_up")}
                    color={MyTheme.primary}
                    size={16}
                    fontFamily="ploni-bold"
                    textAlign="center"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBack: {
    flex: 1,
  },
  safeContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    alignItems: "flex-start",
    paddingTop: 50,
  },
});
