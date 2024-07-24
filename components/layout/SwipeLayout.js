import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import SearchBar from "../custom/SearchBar";
import Header from "./Header";
import { products } from "../../mock/_products";
import { router } from "expo-router";
import { SCREENWIDTH, SCREENHEIGHT } from "../../constants/Sizes";
import SwipeCard from "../cards/SwipeCard";
import { useRef, useCallback, useState } from "react";
import Carousel from "react-native-snap-carousel";

import { useDispatch } from "react-redux";
import { setGroups } from "../../store/reducers/userSlice";
import { I18nManager } from "react-native";
import { useSelector } from "react-redux";

import Overlay from "react-native-modal-overlay";
import OrderSuccessfull from "../cards/OrderSuccessfull";
import { useSharedValue } from "react-native-reanimated";
const SwipeLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const closeOverlay = () => {
    setOverlayVisible(false);
  };
  const carouselRef = useRef();

  const scrollX = useSharedValue(0);
  const activeItem = useSharedValue(0);

  const scrollHandler = (event) => {
    scrollX.value = event.nativeEvent.contentOffset.x;
  };

  const items = [...products];

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
      <View
        style={{
          paddingHorizontal: 24,
          gap: 20,
          flex: 1,
        }}
      >
        <SearchBar variant="white" />

        <View style={styles.subContainer}>
          <Carousel
            layout={"default"}
            layoutCardOffset={0}
            ref={carouselRef}
            data={items}
            renderItem={({ index, item: productData }) => {
              return (
                <View>
                  <SwipeCard
                    productData={productData}
                    scrollX={scrollX}
                    index={index}
                    carouselRef={carouselRef}
                    activeItem={activeItem}
                  />
                </View>
              );
            }}
            sliderWidth={SCREENWIDTH - 48}
            itemWidth={SCREENWIDTH - 90}
            useScrollView={true}
            onScroll={scrollHandler}
            onSnapToItem={(i) => {
              activeItem.value = i;
            }}
            onScrollIndexChanged={(i) =>
              setTimeout(() => {
                activeItem.value = i;
              }, 500)
            }
            enableSnap={true}
            shouldOptimizeUpdates
            removeClippedSubviews={true}
          />
        </View>
      </View>
      <Overlay
        visible={overlayVisible}
        onClose={closeOverlay}
        childrenWrapperStyle={{
          backgroundColor: "transparent",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
        containerStyle={{ backgroundColor: "transparent", padding: 0 }}
      >
        <OrderSuccessfull continueFn={closeOverlay} />
      </Overlay>
    </ScrollView>
  );
};

export default SwipeLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    direction: "ltr",
  },
  subCarousel: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayLabelContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5, // Adjust the opacity as needed
  },
});
