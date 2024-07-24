import { View, Text, StyleSheet, FlatList } from "react-native";
import Typography from "../../Typography";
import FavouriteCard from "../../cards/FavouriteCard";
import { i18n } from "@/i18n";
const SimilarProducts = ({ producData }) => {
  const similarProducts = producData?.similar_products || [];
  return (
    <View style={styles.container}>
      <Typography text={i18n.t("product_detail.similar_products")} size={16} />
      <FlatList
        data={similarProducts}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
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
            width={180}
            isLiked={false}
          />
        )}
        contentContainerStyle={{ gap: 20 }}
      />
    </View>
  );
};

export default SimilarProducts;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 16,
    borderBottomWidth: 4,
    borderBottomColor: "#F2F3F7",
  },
});
