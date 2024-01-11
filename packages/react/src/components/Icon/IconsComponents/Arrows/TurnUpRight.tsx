import React from 'react';
import { IconProps } from "../styles";

export function TurnUpRight(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M19.61 7.25006C19.5594 7.12647 19.4846 7.01427 19.39 6.92006L14.76 2.29006C14.5726 2.10381 14.3192 1.99927 14.055 1.99927C13.7908 1.99927 13.5374 2.10381 13.35 2.29006C13.2563 2.38302 13.1819 2.49362 13.1311 2.61548C13.0803 2.73734 13.0542 2.86805 13.0542 3.00006C13.0542 3.13207 13.0803 3.26278 13.1311 3.38464C13.1819 3.5065 13.2563 3.6171 13.35 3.71006L16.27 6.63006H8.26999C7.20912 6.63006 6.19171 7.05149 5.44156 7.80163C4.69142 8.55178 4.26999 9.56919 4.26999 10.6301V21.0001C4.26999 21.2653 4.37535 21.5196 4.56288 21.7072C4.75042 21.8947 5.00477 22.0001 5.26999 22.0001C5.53521 22.0001 5.78956 21.8947 5.9771 21.7072C6.16463 21.5196 6.26999 21.2653 6.26999 21.0001V10.6301C6.26999 10.0996 6.4807 9.59092 6.85578 9.21585C7.23085 8.84077 7.73956 8.63006 8.26999 8.63006H16.27L13.35 11.5501C13.209 11.6899 13.1128 11.8686 13.0737 12.0634C13.0346 12.2581 13.0545 12.4601 13.1306 12.6435C13.2068 12.827 13.3359 12.9836 13.5014 13.0934C13.6669 13.2032 13.8614 13.2612 14.06 13.2601C14.3238 13.2563 14.5754 13.1485 14.76 12.9601L19.39 8.34006C19.4822 8.24013 19.5566 8.12513 19.61 8.00006C19.7073 7.75953 19.7073 7.49059 19.61 7.25006Z" fill={props.color}/>
</svg>
  );
}