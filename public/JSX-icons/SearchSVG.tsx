import * as React from "react";

interface Props {
  size?: number;
  color?: string;
  classes?: string;
}

function SearchSVG(props: Props) {
  const { size = 24, color = "currentColor", classes = "" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${classes} feather feather-search`}
    >
      <circle cx={11} cy={11} r={8} />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export default SearchSVG;
