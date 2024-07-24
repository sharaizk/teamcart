import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { MyTheme } from "../../theme";
import { useLocalSearchParams } from "expo-router";
import GridLayout from "../../components/layout/GridLayout";
import SwipeLayout from "../../components/layout/SwipeLayout";

const Index = () => {
  const { searchType } = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>{searchType}</Text> */}
      {searchType === "grid" && <GridLayout />}
      {searchType === "swipe" && <SwipeLayout />}
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyTheme.screen_bg,
  },
});
