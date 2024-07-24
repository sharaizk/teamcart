import Svg, { Path } from "react-native-svg";
import { StyleSheet } from "react-native";

const ArrowCircleRight = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={styles.container}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 0C15.514 0 20 4.486 20 10C20 15.514 15.514 20 10 20C4.486 20 0 15.514 0 10C0 4.486 4.486 0 10 0ZM10 1.5C5.313 1.5 1.5 5.313 1.5 10C1.5 14.687 5.313 18.5 10 18.5C14.687 18.5 18.5 14.687 18.5 10C18.5 5.313 14.687 1.5 10 1.5ZM9.0876 5.9977L12.5736 9.4687C12.7146 9.6097 12.7936 9.8007 12.7936 9.9997C12.7936 10.1997 12.7146 10.3907 12.5736 10.5317L9.0876 14.0017C8.9416 14.1477 8.7496 14.2207 8.5586 14.2207C8.3666 14.2207 8.1736 14.1477 8.0276 13.9997C7.7356 13.7057 7.7366 13.2317 8.0296 12.9397L10.9816 9.9997L8.0296 7.0607C7.7366 6.7687 7.7356 6.2937 8.0276 5.9997C8.3196 5.7047 8.7936 5.7067 9.0876 5.9977Z"
        fill="#171725"
      />
    </Svg>
  );
};

export default ArrowCircleRight;

const styles = StyleSheet.create({
  container: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
});
