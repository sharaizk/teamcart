import Svg, { Path } from "react-native-svg";

const PendingIcon = () => {
  return (
    <Svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.375 12.7501H10.625C12.9724 12.7501 14.875 10.8475 14.875 8.50007C14.875 7.14573 14.2396 5.94227 13.2529 5.16382M6.375 12.7501L8.14583 10.9792M6.375 12.7501L8.14583 14.5209M10.625 4.25008H6.375C4.02758 4.25008 2.125 6.15266 2.125 8.50008C2.125 9.85442 2.76037 11.0579 3.74708 11.8363M10.625 4.25008L8.85417 6.02091M10.625 4.25008L8.85417 2.47925"
        stroke="#FACC15"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default PendingIcon;
