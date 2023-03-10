import * as React from "react";

interface Props {
  size?: number;
  color?: string;
  classes?: string;
}

function CodeSVG(props: Props) {
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
      className={`${classes} feather feather-code`}
    >
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

export default CodeSVG;
