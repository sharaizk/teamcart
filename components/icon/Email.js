import Svg, { Path } from "react-native-svg";
import Mail from "../../assets/images/icons/mail.webp";
import { Image } from "expo-image";
const Email = ({ height = 24, width = 24 }) => {
  return (
    <Image
      source={Mail}
      style={{
        height: height,
        width: width,
      }}
    />
  );
};

export default Email;
