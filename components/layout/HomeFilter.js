import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import Typography from "../Typography";
import { categories } from "../../mock/_categories";
import { MyTheme } from "../../theme";

const HomeFilter = () => {
  const [activeCat, setActiveCat] = useState("popular");
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[styles.filterBtn]}
              onPress={() => setActiveCat(item.slug)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.filterImage,
                  activeCat === item.slug && styles.activeFilterImage,
                ]}
              >
                <Image
                  source={item.image}
                  style={{
                    height: item.slug === "popular" ? 24 : 30,
                    width: item.slug === "popular" ? 24 : 30,
                  }}
                  contentFit="contain"
                />
              </View>
              <Typography
                text={item.title}
                size={10}
                fontFamily="ploni-medium"
              />
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 24,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeFilter;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  filterBtn: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  filterImage: {
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MyTheme.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E9EBED",
  },
  activeFilterImage: {
    backgroundColor: MyTheme.primary,
    borderColor: MyTheme.primary,
  },
});
