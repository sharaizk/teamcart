import Svg, { Path } from "react-native-svg";

const InCompletedIcon = () => {
  return (
    <Svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2.27689 12.8775L7.33531 2.8563C7.8275 1.88123 9.1725 1.88123 9.66469 2.8563L14.7231 12.8775C15.1817 13.786 14.5467 14.875 13.5584 14.875H3.44158C2.45332 14.875 1.81833 13.786 2.27689 12.8775Z"
        stroke="#E53935"
        stroke-linecap="round"
      />
      <Path
        d="M8.49921 11.3333C8.40146 11.3333 8.32213 11.4127 8.32284 11.5104C8.32284 11.6082 8.40217 11.6875 8.49992 11.6875C8.59767 11.6875 8.677 11.6082 8.677 11.5104C8.677 11.4127 8.59767 11.3333 8.49921 11.3333"
        stroke="#E53935"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.5 9.5625V6.375"
        stroke="#E53935"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default InCompletedIcon;
