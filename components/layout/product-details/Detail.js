import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Image } from "expo-image";
import { MyTheme } from "../../../theme";
import { useMemo } from "react";
import { i18n } from "@/i18n";
import Typography from "../../Typography";
import TimeIcon from "../../icon/TimeIcon";
import UsersIcon from "../../icon/UsersIcon";

const Detail = ({ productData }) => {
  const images = productData?.images;
  const [activeImage, setImage] = useState(0);

  const unselectedImages = useMemo(() => {
    return images?.filter((img, index) => activeImage !== index);
  }, [activeImage]);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={images[activeImage]}
          style={{ width: 280, height: 158 }}
          contentFit="contain"
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 7,
          flexDirection: "row",
        }}
      >
        {images?.map((image, index) => (
          <TouchableOpacity
            style={[styles.page, index === activeImage && styles.pageActive]}
            key={index}
            onPress={() => setImage(index)}
          />
        ))}
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 7,
          flexDirection: "row",
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 16,
          backgroundColor: MyTheme.white,
          shadowColor: "rgba(170, 170, 170, 0.11)",
          shadowOffset: {
            width: 4,
            height: 12,
          },
          shadowOpacity: 1,
          shadowRadius: 22,
          elevation: 22,
        }}
      >
        {unselectedImages?.map((image, index) => (
          <Image
            source={image}
            key={`image-${index}`}
            style={{
              height: 48,
              width: 48,
              padding: 6,
              backgroundColor: MyTheme.secondary,
              borderRadius: 12,
            }}
            contentFit="contain"
          />
        ))}
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 14,
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View style={styles.discountTag}>
            <Typography
              text={`${i18n.t("groups.discount_off")} ${
                productData?.discount
              }%`}
              color={MyTheme.primary}
              size={12}
              fontFamily="ploni-bold"
            />
          </View>
          <View style={styles.remainingTime}>
            <Typography
              text={productData?.time}
              size={10}
              fontFamily="ploni-bold"
              color={MyTheme.line_black}
            />
            <TimeIcon />
          </View>
        </View>

        <Typography
          text={productData?.title}
          size={18}
          fontFamily="ploni-bold"
        />

        <View
          style={{
            justifyContent: "justify-start",
            alignItems: "center",
            gap: 11,
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Typography
            text={`${productData?.delivered}/${productData?.totalAvailable}`}
            color={MyTheme.secondary_dark}
            size={18}
            fontFamily="ploni-medium"
          />
          <UsersIcon />
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
    borderBottomWidth: 4,
    paddingBottom: 10,
    paddingHorizontal: 24,
    borderColor: "#F2F3F7",
  },
  imageContainer: {
    width: 280,
    height: 158,
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: MyTheme.secondary,
  },
  pageActive: {
    width: 20,
    backgroundColor: MyTheme.primary,
  },
  discountTag: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: MyTheme.dark,
    borderRadius: 36,
  },
  remainingTime: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    backgroundColor: MyTheme.primary,
    borderRadius: 50,
  },
});
