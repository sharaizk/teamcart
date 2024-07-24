import { Tabs, usePathname } from "expo-router";
import TabBar from "../../components/layout/TabBar";
const TabLayout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          keyboardHidesTabBar: true,
          unmountOnBlur: true,
        }}
        // initialParams={{
        //   searchType: "swipe",
        // }}
      />

      <Tabs.Screen
        name="favourites"
        options={{
          headerShown: false,
          keyboardHidesTabBar: true,
          unmountOnBlur: true,
        }}
      />

      <Tabs.Screen
        name="groups"
        options={{
          headerShown: false,
          keyboardHidesTabBar: true,
          unmountOnBlur: true,
        }}
      />

      <Tabs.Screen
        name="product_detail"
        options={{
          headerShown: false,
          keyboardHidesTabBar: true,
          unmountOnBlur: true,
        }}
      />
      <Tabs.Screen
        name="checkout"
        options={{
          headerShown: false,
          keyboardHidesTabBar: true,
          unmountOnBlur: true,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
