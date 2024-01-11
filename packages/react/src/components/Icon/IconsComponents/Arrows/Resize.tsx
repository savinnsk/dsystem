import React from 'react';
import { IconProps } from "../styles";

export function Resize(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21 14C20.7348 14 20.4804 14.1054 20.2929 14.2929C20.1054 14.4804 20 14.7348 20 15V18.59L5.41 4H9C9.26522 4 9.51957 3.89464 9.70711 3.70711C9.89464 3.51957 10 3.26522 10 3C10 2.73478 9.89464 2.48043 9.70711 2.29289C9.51957 2.10536 9.26522 2 9 2H3C2.86932 2.00158 2.74022 2.02876 2.62 2.08C2.37565 2.18147 2.18147 2.37565 2.08 2.62C2.02876 2.74022 2.00158 2.86932 2 3V9C2 9.26522 2.10536 9.51957 2.29289 9.70711C2.48043 9.89464 2.73478 10 3 10C3.26522 10 3.51957 9.89464 3.70711 9.70711C3.89464 9.51957 4 9.26522 4 9V5.41L18.59 20H15C14.7348 20 14.4804 20.1054 14.2929 20.2929C14.1054 20.4804 14 20.7348 14 21C14 21.2652 14.1054 21.5196 14.2929 21.7071C14.4804 21.8946 14.7348 22 15 22H21C21.1307 21.9984 21.2598 21.9712 21.38 21.92C21.6243 21.8185 21.8185 21.6243 21.92 21.38C21.9712 21.2598 21.9984 21.1307 22 21V15C22 14.7348 21.8946 14.4804 21.7071 14.2929C21.5196 14.1054 21.2652 14 21 14Z" fill={props.color}/>
</svg>
  );
}