import React from 'react';
import { IconProps } from "../styles";

export function Arrows2(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M11.29 9.71C11.383 9.80373 11.4936 9.87812 11.6154 9.92889C11.7373 9.97966 11.868 10.0058 12 10.0058C12.132 10.0058 12.2627 9.97966 12.3846 9.92889C12.5064 9.87812 12.617 9.80373 12.71 9.71L17.71 4.71C17.8983 4.5217 18.0041 4.2663 18.0041 4C18.0041 3.7337 17.8983 3.47831 17.71 3.29C17.5217 3.1017 17.2663 2.99591 17 2.99591C16.7337 2.99591 16.4783 3.1017 16.29 3.29L12 7.59L7.71 3.29C7.5217 3.1017 7.2663 2.99591 7 2.99591C6.7337 2.99591 6.47831 3.1017 6.29 3.29C6.1017 3.47831 5.99591 3.7337 5.99591 4C5.99591 4.2663 6.1017 4.5217 6.29 4.71L11.29 9.71ZM12.71 14.29C12.617 14.1963 12.5064 14.1219 12.3846 14.0711C12.2627 14.0203 12.132 13.9942 12 13.9942C11.868 13.9942 11.7373 14.0203 11.6154 14.0711C11.4936 14.1219 11.383 14.1963 11.29 14.29L6.29 19.29C6.1017 19.4783 5.99591 19.7337 5.99591 20C5.99591 20.2663 6.1017 20.5217 6.29 20.71C6.47831 20.8983 6.7337 21.0041 7 21.0041C7.2663 21.0041 7.5217 20.8983 7.71 20.71L12 16.41L16.29 20.71C16.383 20.8037 16.4936 20.8781 16.6154 20.9289C16.7373 20.9797 16.868 21.0058 17 21.0058C17.132 21.0058 17.2627 20.9797 17.3846 20.9289C17.5064 20.8781 17.617 20.8037 17.71 20.71C17.8037 20.617 17.8781 20.5064 17.9289 20.3846C17.9797 20.2627 18.0058 20.132 18.0058 20C18.0058 19.868 17.9797 19.7373 17.9289 19.6154C17.8781 19.4936 17.8037 19.383 17.71 19.29L12.71 14.29Z" fill={props.color}/>
</svg>
  );
}