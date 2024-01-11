import React from 'react';
import { IconProps } from "../styles";

export function DownArrow(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M17.71 11.29C17.617 11.1963 17.5064 11.1219 17.3846 11.0711C17.2627 11.0203 17.132 10.9942 17 10.9942C16.868 10.9942 16.7373 11.0203 16.6154 11.0711C16.4936 11.1219 16.383 11.1963 16.29 11.29L13 14.59V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V14.59L7.71 11.29C7.5217 11.1017 7.2663 10.9959 7 10.9959C6.7337 10.9959 6.47831 11.1017 6.29 11.29C6.1017 11.4783 5.99591 11.7337 5.99591 12C5.99591 12.2663 6.1017 12.5217 6.29 12.71L11.29 17.71C11.3851 17.801 11.4973 17.8724 11.62 17.92C11.7397 17.9729 11.8691 18.0002 12 18.0002C12.1309 18.0002 12.2603 17.9729 12.38 17.92C12.5028 17.8724 12.6149 17.801 12.71 17.71L17.71 12.71C17.8037 12.617 17.8781 12.5064 17.9289 12.3846C17.9797 12.2627 18.0058 12.132 18.0058 12C18.0058 11.868 17.9797 11.7373 17.9289 11.6154C17.8781 11.4936 17.8037 11.383 17.71 11.29Z" fill={props.color}/>
</svg>
  );
}