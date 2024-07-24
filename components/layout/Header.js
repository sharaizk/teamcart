import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import NotificationIcon from "../icon/NotificationIcon";
import CoinsIcon from "../icon/CoinsIcon";
import Avatar from "../../assets/images/mock_products/user.png";
import Typography from "../Typography";
import { Image } from "expo-image";
import { MyTheme } from "../../theme";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Image
            source={Avatar}
            alt="user-icon"
            style={{ height: 40, width: 40, borderRadius: 20 }}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              padding: 6,
              gap: 5,
            }}
          >
            <CoinsIcon />
            <Typography text="200" fontFamily="ploni-semi-bold" size={12} />
          </View>
        </View>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Typography text="Cart" fontFamily="ploni-regular" size={16} />
          <Typography text="Team" fontFamily="ploni-semi-bold" size={16} />
        </View>
      </View>
      <TouchableOpacity>
        <NotificationIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 24,
  },
  avatarContainer: {
    flex: 0.8,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  avatar: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: MyTheme.primary,
    borderRadius: 20,
    gap: 8,
  },
});
