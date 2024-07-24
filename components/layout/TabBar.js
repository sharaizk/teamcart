import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MyTheme } from "../../theme";
import HeartIcon from "../icon/HeartIcon";
import GroupIcon from "../icon/GroupIcon";
import GridIcon from "../icon/GridIcon";
import SwipeIcon from "../icon/SwipeIcon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { i18n } from "../../i18n";
import { getFontSize } from "@/helpers/fontSize";
import { SCREENWIDTH } from "../../constants/Sizes";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import { useState } from "react";

const GridButton = () => {
  const [showSwipe, setSwipe] = useState(false);
  const navigateTo = (path, params) => {
    if (params?.searchType === "grid") {
      setSwipe(true);
    } else {
      setSwipe(false);
    }
    router.push({
      pathname: path,
      params: {
        ...params,
      },
    });
  };

  return (
    <View style={styles.gbContainer}>
      <TouchableOpacity
        style={styles.gridButton}
        onPress={() =>
          navigateTo("(tabs)/", { searchType: showSwipe ? "swipe" : "grid" })
        }
      >
        {showSwipe ? <SwipeIcon /> : <GridIcon />}
      </TouchableOpacity>
    </View>
  );
};

const TabBar = (props) => {
  const path = usePathname();
  const { navigation, state } = props;
  const insets = useSafeAreaInsets();
  const navigateTo = (path) => {
    router.push(path);
  };
  const hide = ["/product_detail", "/checkout"].includes(path)
    ? "none"
    : "flex";
  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom, display: hide },
      ]}
    >
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          paddingVertical: 11,
        }}
        onPress={() => navigateTo("(tabs)/favourites")}
      >
        <HeartIcon isActive={state.index === 1} />
        <Text
          style={[
            styles.groupText,
            {
              color:
                state.index === 1 ? MyTheme.primary : MyTheme.graysacle_40_2,
            },
          ]}
        >
          {i18n.t("navs.favourite")}
        </Text>
      </TouchableOpacity>

      <GridButton />

      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          paddingVertical: 11,
        }}
        onPress={() => navigateTo("(tabs)/groups")}
      >
        <GroupIcon isActive={state.index === 2} />
        <Text
          style={[
            styles.groupText,
            {
              color:
                state.index === 2 ? MyTheme.primary : MyTheme.graysacle_40_2,
            },
          ]}
        >
          {i18n.t("navs.groups")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    minHeight: 70,
    backgroundColor: MyTheme.white,
    paddingHorizontal: 52,
    elevation: 8,
    position: "relative",
  },
  groupText: {
    fontFamily: "ploni-medium",
    fontSize: getFontSize(12),
    color: MyTheme.graysacle_40_2,
  },
  gridButton: {
    minWidth: 60,
    minHeight: 60,
    backgroundColor: MyTheme.primary,
    borderRadius: 15,
    padding: 6,
    borderWidth: 6,
    borderColor: "#f8f8fc",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -50,
    left: -(SCREENWIDTH / 25),
  },
  gbContainer: {
    // position: "relative",
    // minWidth: 55,
    // minHeight: 55,
  },
});
