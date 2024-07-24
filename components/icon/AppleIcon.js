import Apple from "../../assets/images/icons/apple.png";
import { Image } from "expo-image";
const AppleIcon = ({ height = 24, width = 24 }) => {
  return (
    <Image
      source={Apple}
      style={{
        height: height,
        width: width,
      }}
      contentFit="contain"
    />
  );
};

export default AppleIcon;
