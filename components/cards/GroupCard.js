import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MyTheme } from "../../theme";
import Typography from "../Typography";
import UsersIcon from "../icon/UsersIcon";
import { Image } from "expo-image";
import PendingIcon from "../icon/PendingIcon";
import CompletedIcon from "../icon/CompletedIcon";
import InCompletedIcon from "../icon/InCompletedIcon";
import TimeIcon from "../icon/TimeIcon";
import ChevDown from "../icon/ChevDown";
import { i18n } from "@/i18n";

const StatusChip = ({ status }) => {
  if (status === 0) {
    return (
      <View style={styles.pending}>
        <PendingIcon />
        <Typography
          text={i18n.t("groups.pending")}
          color={MyTheme.alert_warning}
          size={10}
          fontFamily="ploni-bold"
        />
      </View>
    );
  }
  if (status === 1) {
    return (
      <View style={styles.completed}>
        <CompletedIcon />
        <Typography
          text={i18n.t("groups.completed")}
          color={MyTheme.alert_success}
          size={10}
          fontFamily="ploni-bold"
        />
      </View>
    );
  }
  if (status === 2) {
    return (
      <View style={styles.incomplete}>
        <InCompletedIcon />

        <Typography
          text={i18n.t("groups.in_completed")}
          color={MyTheme.alert_error}
          size={10}
          fontFamily="ploni-bold"
        />
      </View>
    );
  }
  return <></>;
};

const GroupCard = ({
  image = "",
  status,
  time,
  title,
  realPrice,
  discountedPrice,
  delivered,
  totalAvailable,
  discount,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={image}
          alt="image"
          style={styles.image}
          contentFit="cover"
        />
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 4,
            width: "100%",
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              width: "75%",
            }}
          >
            <Typography text={title} fontFamily="ploni-semi-bold" size={12} />
            <View style={styles.discountTag}>
              <Typography
                text={`${i18n.t("groups.discount_off")} ${discount}%`}
                color={MyTheme.primary}
                size={10}
                fontFamily="ploni-medium"
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <View>
              <Typography
                text={`${realPrice}₪`}
                color={MyTheme.grayscale_80}
                size={10}
                fontFamily="ploni-semi-bold"
              />
            </View>
            <View>
              <Typography
                text={`${discountedPrice}₪`}
                color={MyTheme.line_black}
                size={12}
                fontFamily="ploni-semi-bold"
              />
            </View>
          </View>

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
              text={`${delivered}/${totalAvailable}`}
              color={MyTheme.secondary_dark}
              size={12}
              fontFamily="ploni-medium"
            />
            <UsersIcon />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            flex: 0.8,
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <StatusChip status={status} />
          <View style={styles.remainingTime}>
            <Typography text={time} size={10} fontFamily="ploni-bold" />
            <TimeIcon />
          </View>
        </View>

        <TouchableOpacity
          style={{
            padding: 3,
            borderRadius: 30,
            backgroundColor: MyTheme.white,
          }}
        >
          <ChevDown />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GroupCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 12,
    backgroundColor: MyTheme.secondary,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  topContainer: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderBottomWidth: 2,
    borderBottomColor: MyTheme.white,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 16,
  },
  bottomContainer: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 8,
  },
  discountTag: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: MyTheme.dark,
    borderRadius: 36,
  },
  pending: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 3,
    backgroundColor: "rgba(157, 126, 1, 0.05)",
    borderRadius: 50,
    padding: 2,
    paddingRight: 10,
    minHeight: 17,
  },
  completed: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 3,
    backgroundColor: "rgba(157, 126, 1, 0.05)",
    borderRadius: 50,
    padding: 2,
    paddingRight: 10,
    minHeight: 17,
  },
  incomplete: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 3,
    backgroundColor: "rgba(220, 7, 7, 0.10)",
    borderRadius: 50,
    padding: 2,
    paddingRight: 10,
    minHeight: 17,
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
