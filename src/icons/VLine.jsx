import COLORS from "constants/colors";

export default function VLine() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="16"
      viewBox="0 0 2 16"
      fill="none"
    >
      <path d="M1 0V16" stroke={COLORS.black} strokeOpacity="0.1" />
    </svg>
  );
}
