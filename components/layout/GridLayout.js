import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import SearchBar from "../custom/SearchBar";
import Typography from "../Typography";
import FavouriteCard from "../cards/FavouriteCard";
import Header from "./Header";
import HomeFilter from "./HomeFilter";
import { i18n } from "@/i18n";
import { products } from "../../mock/_products";
import { router } from "expo-router";

const GridLayout = () => {
  const goToProductDetail = () => {
    router.push("/(tabs)/product_detail");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        gap: 20,
        paddingTop: 40,
        paddingBottom: 100,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <Header />
      <HomeFilter />
      <View
        style={{
          paddingHorizontal: 24,
          gap: 20,
        }}
      >
        <SearchBar variant="white" />
        <View
          style={{
            gap: 10,
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            text={`(24) ${i18n.t("groups.products")}`}
            size={18}
            fontFamily="ploni-bold"
          />

          <FlatList
            numColumns={2}
            data={products}
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
                width={products?.length === 1 ? "100%" : "48.5%"}
                isLiked={false}
                onPress={goToProductDetail}
              />
            )}
            scrollEnabled={false}
            contentContainerStyle={{
              rowGap: 10,
            }}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ columnGap: 10 }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default GridLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
