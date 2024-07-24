import { Image } from "expo-image";
import Coins from "../../assets/images/icons/coins.png";
const CoinsIcon = () => {
  return <Image source={Coins} alt="coins" style={{ height: 24, width: 24 }} />;
};

export default CoinsIcon;
