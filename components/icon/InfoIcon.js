import infoicon from "../../assets/images/icons/info-icon.png";
import { Image } from "expo-image";
const InfoIcon = () => {
  return <Image style={{ height: 24, width: 24 }} source={infoicon} />;
};

export default InfoIcon;
