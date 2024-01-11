import React from 'react';
import { IconProps } from "../styles";

export function Pulse(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21 11H17.06C16.9903 10.9906 16.9197 10.9906 16.85 11H16.68C16.6277 11.0299 16.5776 11.0633 16.53 11.1C16.4743 11.1368 16.4209 11.1769 16.37 11.22C16.3366 11.2609 16.3065 11.3044 16.28 11.35C16.2342 11.413 16.194 11.48 16.16 11.55L14.56 15.96L10.39 4.66005C10.3199 4.467 10.1921 4.3002 10.0239 4.18233C9.85577 4.06445 9.65537 4.00122 9.45 4.00122C9.24463 4.00122 9.04423 4.06445 8.87605 4.18233C8.70788 4.3002 8.58007 4.467 8.51 4.66005L6.2 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4805 2 11.7348 2 12C2 12.2653 2.10536 12.5196 2.29289 12.7072C2.48043 12.8947 2.73478 13 3 13H6.92H7.15H7.3C7.35684 12.9727 7.4105 12.9391 7.46 12.9C7.51568 12.8633 7.56911 12.8232 7.62 12.78L7.71 12.65C7.75766 12.5883 7.79794 12.5212 7.83 12.45L9.45 7.92005L13.61 19.34C13.6799 19.5333 13.8076 19.7004 13.9758 19.8185C14.144 19.9366 14.3445 20 14.55 20C14.7555 20 14.956 19.9366 15.1242 19.8185C15.2924 19.7004 15.4201 19.5333 15.49 19.34L17.79 13H21C21.2652 13 21.5196 12.8947 21.7071 12.7072C21.8946 12.5196 22 12.2653 22 12C22 11.7348 21.8946 11.4805 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill={props.color}/>
</svg>
  );
}