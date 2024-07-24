import Svg, { Path } from "react-native-svg";

const CompletedIcon = () => {
  return (
    <Svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10.625 7.08333L7.70312 9.91667L6.375 8.62879M14.875 8.5C14.875 12.0208 12.0208 14.875 8.5 14.875C4.97918 14.875 2.125 12.0208 2.125 8.5C2.125 4.97918 4.97918 2.125 8.5 2.125C12.0208 2.125 14.875 4.97918 14.875 8.5Z"
        stroke="#00C566"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default CompletedIcon;
