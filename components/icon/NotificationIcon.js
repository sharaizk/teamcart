import Svg, { Path, Circle } from "react-native-svg";
const NotificationIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 2.25C14.3766 2.25 12.25 4.37665 12.25 7C12.25 9.62335 14.3766 11.75 17 11.75C19.6234 11.75 21.75 9.62335 21.75 7C21.75 4.37665 19.6234 2.25 17 2.25ZM16.75 4.91999C17.1642 4.91999 17.5 5.25578 17.5 5.66999V6.74999H18.25C18.6642 6.74999 19 7.08578 19 7.49999C19 7.9142 18.6642 8.24999 18.25 8.24999H16.75C16.3358 8.24999 16 7.9142 16 7.49999V5.66999C16 5.25578 16.3358 4.91999 16.75 4.91999Z"
        fill="black"
      />
      <Path
        d="M11.3561 4.31168C10.9675 5.12599 10.75 6.03759 10.75 7C10.75 10.4052 13.4732 13.1744 16.8607 13.2485C16.9831 13.4152 17.1283 13.5667 17.2939 13.6979L17.7542 14.0626C18.3832 14.561 18.75 15.3196 18.75 16.1222C18.75 17.5735 17.5735 18.75 16.1222 18.75H4.8778C3.42651 18.75 2.25 17.5735 2.25 16.1222C2.25 15.3196 2.61677 14.561 3.24581 14.0626L3.70609 13.6979C4.26681 13.2536 4.59375 12.5774 4.59375 11.862V10.1562C4.59375 6.89432 7.23807 4.25 10.5 4.25C10.7906 4.25 11.0765 4.27104 11.3561 4.31168Z"
        fill="black"
      />
      <Path
        d="M7.49994 20.25C8.18409 21.1608 9.27335 21.75 10.5002 21.75C11.7271 21.75 12.8163 21.1608 13.5005 20.25H7.49994Z"
        fill="black"
      />
      <Circle cx="17" cy="7" r="3" fill="#E53935" />
    </Svg>
  );
};

export default NotificationIcon;