import React from 'react';
import { IconProps } from "../styles";

export function Award(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21.38 5.76004C21.3459 5.63235 21.2867 5.51269 21.2061 5.40798C21.1254 5.30328 21.0248 5.21561 20.91 5.15004L15.71 2.15004C15.5965 2.08351 15.4709 2.04004 15.3405 2.02213C15.2102 2.00421 15.0775 2.01221 14.9503 2.04565C14.823 2.0791 14.7036 2.13733 14.5989 2.21702C14.4941 2.29671 14.4062 2.39629 14.34 2.51004L12 6.57004L9.66 2.51004C9.59384 2.39629 9.50587 2.29671 9.40115 2.21702C9.29643 2.13733 9.17701 2.0791 9.04973 2.04565C8.92246 2.01221 8.78983 2.00421 8.65946 2.02213C8.52909 2.04004 8.40354 2.08351 8.29 2.15004L3.09 5.15004C2.97523 5.21561 2.8746 5.30328 2.79393 5.40798C2.71326 5.51269 2.65414 5.63235 2.62 5.76004C2.55382 6.01349 2.58973 6.28279 2.72 6.51004L6.72 13.34C6.27375 14.1576 6.02704 15.069 6 16C5.99762 16.9083 6.20149 17.8053 6.59622 18.6233C6.99096 19.4414 7.56626 20.1591 8.27876 20.7224C8.99126 21.2857 9.82235 21.6799 10.7094 21.8753C11.5964 22.0707 12.5162 22.0621 13.3994 21.8503C14.2827 21.6384 15.1063 21.2288 15.8082 20.6523C16.5101 20.0758 17.0719 19.3475 17.4513 18.5223C17.8308 17.697 18.0179 16.7964 17.9986 15.8884C17.9793 14.9803 17.7541 14.0884 17.34 13.28L21.24 6.52004C21.3126 6.40898 21.3623 6.28459 21.3864 6.15411C21.4104 6.02363 21.4082 5.88967 21.38 5.76004ZM5 6.38004L8.46 4.38004L11.68 10C10.3074 10.0848 9.00679 10.6433 8 11.58L5 6.38004ZM12 20C10.9391 20 9.92172 19.5786 9.17157 18.8285C8.42143 18.0783 8 17.0609 8 16C8 14.9392 8.42143 13.9218 9.17157 13.1716C9.92172 12.4215 10.9391 12 12 12C13.0609 12 14.0783 12.4215 14.8284 13.1716C15.5786 13.9218 16 14.9392 16 16C16 17.0609 15.5786 18.0783 14.8284 18.8285C14.0783 19.5786 13.0609 20 12 20ZM16 11.55C15.4571 11.0542 14.8262 10.6641 14.14 10.4L13.16 8.57004L15.58 4.38004L19.04 6.38004L16 11.55Z" fill={props.color}/>
</svg>
  );
}