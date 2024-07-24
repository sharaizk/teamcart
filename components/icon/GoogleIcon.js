import Google from "../../assets/images/icons/google.webp";
import { Image } from "expo-image";
const GoogleIcon = ({ height = 24, width = 24 }) => {
  return (
    <Image
      source={Google}
      style={{
        height: height,
        width: width,
      }}
    />
  );
};

export default GoogleIcon;
