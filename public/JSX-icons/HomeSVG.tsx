import * as React from "react";

interface Props {
  size?: number;
  color?: string;
  classes?: string;
}

function HomeSVG(props: Props) {
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
      className={`${classes} feather feather-home`}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

export default HomeSVG;
