import Svg, { Path, Ellipse } from "react-native-svg";
import { MyTheme } from "../../theme";
const GroupIcon = ({ isActive = false }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3 6.97403V8.84416H4.8L8.04 15.9413L6.825 18.2322C6.681 18.494 6.6 18.8026 6.6 19.1299C6.6 20.1584 7.41 21 8.4 21H19.2V19.1299H8.778C8.652 19.1299 8.553 19.027 8.553 18.8961L8.58 18.7839L9.39 17.2597H16.095C16.77 17.2597 17.364 16.8764 17.67 16.2966L20.892 10.2281C20.964 10.0971 21 9.93819 21 9.77922C21 9.26494 20.595 8.84416 20.1 8.84416H6.789L5.943 6.97403H3Z"
        fill={isActive ? MyTheme.primary : MyTheme.graysacle_40_2}
      />
      <Ellipse
        cx="13.35"
        cy="5.33766"
        rx="2.25"
        ry="2.33766"
        fill={isActive ? MyTheme.primary : MyTheme.graysacle_40_2}
      />
      <Ellipse
        cx="18.075"
        cy="6.50651"
        rx="1.8"
        ry="1.87013"
        fill={isActive ? MyTheme.primary : MyTheme.graysacle_40_2}
      />
      <Ellipse
        cx="8.62507"
        cy="6.50651"
        rx="1.8"
        ry="1.87013"
        fill={isActive ? MyTheme.primary : MyTheme.graysacle_40_2}
      />
    </Svg>
  );
};

export default GroupIcon;
