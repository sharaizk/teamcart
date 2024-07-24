import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MyTheme } from "../../theme";
import React from "react";
import { i18n } from "@/i18n";
import FavouriteCard from "../../components/cards/FavouriteCard";
import ArrowLeft from "../../components/icon/ArrowLeft";
import Typography from "../../components/Typography";
import SearchBar from "../../components/custom/SearchBar";
import { likedItems } from "../../mock/_favourites";
import { router } from "expo-router";
const Favourites = () => {
  const goBack = () => {
    router.back();
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
              text={i18n.t("groups.liked_items")}
              fontFamily="ploni-bold"
              size={18}
            />
          </View>
          <View style={{ flex: 0.1 }} />
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
            text={`(24) ${i18n.t("groups.liked_items")}`}
            size={18}
            fontFamily="ploni-bold"
          />

          <FlatList
            numColumns={2}
            data={likedItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <FavouriteCard
                time={item.time}
                title={item.title}
                discount={item.discount}
                discountedPrice={item.discountedPrice}
                realPrice={item.realPrice}
                delivered={item.delivered}
                totalAvailable={item.totalAvailable}
                image={item.image}
              />
            )}
            contentContainerStyle={{
              rowGap: 10,
              paddingBottom: 200,
            }}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ columnGap: 10 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favourites;

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
  },
});
