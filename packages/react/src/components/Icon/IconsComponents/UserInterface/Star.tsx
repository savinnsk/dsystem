import React from 'react';
import { IconProps } from "../styles";

export function Star(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M22 9.6699C21.9368 9.48699 21.822 9.32633 21.6693 9.2074C21.5167 9.08848 21.3328 9.0164 21.14 8.9999L15.45 8.1699L12.9 2.9999C12.8181 2.83083 12.6902 2.68824 12.5311 2.58847C12.3719 2.48871 12.1878 2.43579 12 2.43579C11.8121 2.43579 11.6281 2.48871 11.4689 2.58847C11.3097 2.68824 11.1819 2.83083 11.1 2.9999L8.54998 8.1599L2.85998 8.9999C2.6749 9.02621 2.5009 9.10386 2.35773 9.22406C2.21455 9.34425 2.10794 9.50218 2.04998 9.6799C1.99692 9.85358 1.99216 10.0384 2.03621 10.2146C2.08025 10.3908 2.17144 10.5516 2.29998 10.6799L6.42998 14.6799L5.42998 20.3599C5.3896 20.5483 5.40453 20.7444 5.47296 20.9245C5.54139 21.1047 5.66041 21.2612 5.81571 21.3753C5.971 21.4894 6.15595 21.5562 6.34831 21.5676C6.54066 21.5791 6.73224 21.5347 6.89998 21.4399L12 18.7699L17.1 21.4399C17.2403 21.5191 17.3988 21.5604 17.56 21.5599C17.7718 21.5607 17.9784 21.4941 18.15 21.3699C18.3051 21.2588 18.4252 21.1055 18.4961 20.9284C18.567 20.7512 18.5857 20.5574 18.55 20.3699L17.55 14.6899L21.68 10.6899C21.8244 10.5676 21.9311 10.4068 21.9877 10.2262C22.0444 10.0457 22.0486 9.85278 22 9.6699ZM11 16.9999L7.76998 18.6999L8.48998 14.4999C8.51622 14.3407 8.50354 14.1775 8.45305 14.0243C8.40255 13.871 8.31572 13.7323 8.19998 13.6199L5.19998 10.6199L9.40998 10.0099C9.57198 9.98737 9.72598 9.92544 9.85848 9.82955C9.99098 9.73366 10.0979 9.60674 10.17 9.4599L11 7.7299V16.9999ZM15.8 13.6199C15.6842 13.7323 15.5974 13.871 15.5469 14.0243C15.4964 14.1775 15.4837 14.3407 15.51 14.4999L16.23 18.6999L13 16.9999V7.7299L13.88 9.5199C13.952 9.66674 14.059 9.79366 14.1915 9.88955C14.324 9.98544 14.478 10.0474 14.64 10.0699L18.85 10.6799L15.8 13.6199Z" fill={props.color}/>
</svg>
  );
}