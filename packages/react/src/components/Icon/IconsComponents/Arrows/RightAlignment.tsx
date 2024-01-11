import React from 'react';
import { IconProps } from "../styles";

export function RightAlignment(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M3 4C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20C3.26522 20 3.51957 19.8946 3.70711 19.7071C3.89464 19.5196 4 19.2652 4 19V5C4 4.73478 3.89464 4.48043 3.70711 4.29289C3.51957 4.10536 3.26522 4 3 4ZM21.92 11.62C21.8724 11.4972 21.801 11.3851 21.71 11.29L17.71 7.29C17.6168 7.19676 17.5061 7.1228 17.3842 7.07234C17.2624 7.02188 17.1319 6.99591 17 6.99591C16.7337 6.99591 16.4783 7.1017 16.29 7.29C16.1017 7.4783 15.9959 7.7337 15.9959 8C15.9959 8.2663 16.1017 8.5217 16.29 8.71L18.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H18.59L16.29 15.29C16.1963 15.383 16.1219 15.4936 16.0711 15.6154C16.0203 15.7373 15.9942 15.868 15.9942 16C15.9942 16.132 16.0203 16.2627 16.0711 16.3846C16.1219 16.5064 16.1963 16.617 16.29 16.71C16.383 16.8037 16.4936 16.8781 16.6154 16.9289C16.7373 16.9797 16.868 17.0058 17 17.0058C17.132 17.0058 17.2627 16.9797 17.3846 16.9289C17.5064 16.8781 17.617 16.8037 17.71 16.71L21.71 12.71C21.801 12.6149 21.8724 12.5028 21.92 12.38C22.02 12.1365 22.02 11.8635 21.92 11.62Z" fill={props.color}/>
</svg>
  );
}