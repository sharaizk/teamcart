import { View, Text, StyleSheet } from "react-native";
import { i18n } from "@/i18n";
import Typography from "../../Typography";

const Description = ({ productData }) => {
  return (
    <View style={styles.container}>
      <Typography
        text={i18n.t("product_detail.description")}
        size={16}
        fontFamily="ploni-bold"
      />

      <Typography
        text={productData?.description}
        textAlign="left"
        color="#666666"
        fontFamily="ploni-regular"
        size={12}
      />
    </View>
  );
};

export default Description;

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
