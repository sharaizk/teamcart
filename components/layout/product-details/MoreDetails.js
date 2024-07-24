import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Typography from "../../Typography";
import { i18n } from "@/i18n";
import { MyTheme } from "../../../theme";
import PlusIcon from "../../icon/PlusIcon";
const MoreDetails = ({ producData }) => {
  return (
    <View style={styles.container}>
      <Typography
        text={i18n.t("product_detail.more_details")}
        size={16}
        fontFamily="ploni-bold"
      />

      <View style={{ gap: 10 }}>
        <TouchableOpacity style={styles.detailBtn}>
          <Typography
            text={i18n.t("product_detail.product_details")}
            size={14}
            fontFamily="ploni-semi-bold"
          />
          <PlusIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailBtn}>
          <Typography
            text={i18n.t("product_detail.brand")}
            size={14}
            fontFamily="ploni-semi-bold"
          />
          <PlusIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailBtn}>
          <Typography
            text={i18n.t("product_detail.size_fit")}
            size={14}
            fontFamily="ploni-semi-bold"
          />
          <PlusIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailBtn}>
          <Typography
            text={i18n.t("product_detail.look_after_me")}
            size={14}
            fontFamily="ploni-semi-bold"
          />
          <PlusIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoreDetails;

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
  detailBtn: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 45,
    flexDirection: "row",
    gap: 10,
    backgroundColor: MyTheme.white,
    padding: 14,
    paddingHorizontal: 10,
    shadowColor: "rgba(0, 0, 0, 0.10)",
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20,
  },
});
