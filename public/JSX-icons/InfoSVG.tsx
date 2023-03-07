import * as React from "react";

interface Props {
  size?: number;
  color?: string;
  classes?: string;
}

function InfoSVG(props: Props) {
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
      className={`${classes} feather feather-info`}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

export default InfoSVG;
