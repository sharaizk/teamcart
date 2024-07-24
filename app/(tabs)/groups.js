import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { MyTheme } from "../../theme";
import { i18n } from "@/i18n";

import ArrowLeft from "../../components/icon/ArrowLeft";
import SearchBar from "../../components/custom/SearchBar";
import Typography from "../../components/Typography";
import HeartIconOutlined from "../../components/icon/HeartIconOutlined";
import GroupCard from "../../components/cards/GroupCard";
import { groupedItems } from "../../mock/_groups";

import { router } from "expo-router";
import { useSelector } from "react-redux";

const Groups = () => {
  const { groups } = useSelector((state) => state.user);
  const goBack = () => {
    router.back();
  };
  const goToFavourites = () => {
    router.push("/(tabs)/favourites");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
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
              text={`${i18n.t("groups.my_groups")}`}
              fontFamily="ploni-bold"
              size={18}
            />
          </View>
          <TouchableOpacity style={{ flex: 0.1 }} onPress={goToFavourites}>
            <HeartIconOutlined />
          </TouchableOpacity>
        </View>
        <SearchBar />
        <View
          style={{
            gap: 10,
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            text={`${i18n.t("groups.products")}`}
            size={18}
            fontFamily="ploni-bold"
          />
        </View>

        <FlatList
          data={groups}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GroupCard
              time={item.time}
              title={item.title}
              discount={item.discount}
              discountedPrice={item.discountedPrice}
              realPrice={item.realPrice}
              delivered={item.delivered}
              totalAvailable={item.totalAvailable}
              image={item.image}
              status={item.status}
            />
          )}
          contentContainerStyle={{
            rowGap: 10,
            paddingBottom: 200,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyTheme.white,
  },
  mainContainer: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
});
