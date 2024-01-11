import React from 'react';
import { IconProps } from "../styles";

export function VisualStudio(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M16.85 2L9.08999 9.77L4.18999 5.91L2.04999 7V17L4.19999 18.09L9.12999 14.24L16.87 22L22 19.93V4L16.85 2ZM4.36999 14.3V9.65L6.80999 12.08L4.36999 14.3ZM16.7 15.59L12.05 12L16.7 8.41V15.59Z" fill={props.color}/>
</svg>
  );
}