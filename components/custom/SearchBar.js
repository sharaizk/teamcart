import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MyTheme } from "../../theme";
import SearchIcon from "../icon/SearchIcon";
import FilterIcon from "../icon/FilterIcon";
import { i18n } from "@/i18n";
const SearchBar = ({ variant = "light" }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            variant === "light" ? MyTheme.secondary : MyTheme.white,
        },
      ]}
    >
      {/* <Text>SearchBar</Text> */}
      <View style={styles.left}>
        <SearchIcon />
        <TextInput
          style={{
            width: "100%",
            fontFamily: "ploni-bold",
            color: MyTheme.grayscale_900,
            direction: "rtl",
            textAlign: "right",
          }}
          placeholder={i18n.t("placeholder.search")}
        />
      </View>
      <TouchableOpacity style={styles.right}>
        <FilterIcon />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    borderRadius: 10,
    minHeight: 60,
    paddingHorizontal: 15,
    paddingVertical: 13,
  },
  left: {
    flex: 0.9,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  right: {
    borderLeftWidth: 1,
    paddingLeft: 5,
    borderLeftColor: "#E3E7EC",
  },
});
