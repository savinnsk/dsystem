import React from 'react';
import { IconProps } from "../styles";

export function NightWeather(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21.7 9.07009C21.5795 8.95176 21.4311 8.86586 21.2684 8.8204C21.1058 8.77493 20.9343 8.77139 20.77 8.81009C20.5535 8.86012 20.3322 8.88693 20.11 8.89009C19.3143 8.89009 18.5513 8.57402 17.9887 8.01141C17.4261 7.4488 17.11 6.68574 17.11 5.89009C17.1131 5.66788 17.14 5.44663 17.19 5.23009C17.2287 5.06573 17.2251 4.89425 17.1797 4.73163C17.1342 4.56901 17.0483 4.42055 16.93 4.30009C16.8136 4.17471 16.667 4.08129 16.5041 4.02876C16.3413 3.97624 16.1677 3.96636 16 4.00009C15.0047 4.21983 14.102 4.74265 13.4161 5.49659C12.7302 6.25053 12.2949 7.19852 12.17 8.21009C11.6254 8.06499 11.0636 7.99435 10.5 8.00009C9.05884 7.99927 7.66555 8.51719 6.57486 9.45915C5.48417 10.4011 4.76895 11.7042 4.55999 13.1301C3.74618 13.3583 3.04244 13.8733 2.57875 14.5799C2.11506 15.2866 1.92274 16.1372 2.03732 16.9746C2.1519 17.812 2.56563 18.5796 3.2021 19.1357C3.83858 19.6919 4.65479 19.9989 5.49999 20.0001H14.67C15.8184 20.0001 16.9197 19.5439 17.7318 18.7319C18.5438 17.9198 19 16.8185 19 15.6701C19.0039 14.9732 18.8356 14.2862 18.51 13.6701C19.3688 13.4303 20.1466 12.9625 20.7611 12.3164C21.3755 11.6702 21.8036 10.8698 22 10.0001C22.0337 9.83236 22.0238 9.65878 21.9713 9.49595C21.9188 9.33313 21.8254 9.1865 21.7 9.07009ZM14.7 18.0001H5.49999C5.10216 18.0001 4.72063 17.8421 4.43933 17.5608C4.15802 17.2794 3.99999 16.8979 3.99999 16.5001C3.99999 16.1023 4.15802 15.7207 4.43933 15.4394C4.72063 15.1581 5.10216 15.0001 5.49999 15.0001C5.7652 15.0001 6.01956 14.8947 6.20709 14.7072C6.39463 14.5197 6.49999 14.2653 6.49999 14.0001C6.50245 13.2812 6.69862 12.5763 7.06784 11.9594C7.43706 11.3426 7.96569 10.8367 8.59813 10.4949C9.23057 10.1531 9.94344 9.98802 10.6617 10.0171C11.38 10.0462 12.0772 10.2683 12.68 10.6601C13.41 11.1349 13.9621 11.8382 14.25 12.6601C14.3071 12.8319 14.4099 12.985 14.5473 13.103C14.6846 13.221 14.8515 13.2995 15.03 13.3301C15.3366 13.3537 15.6356 13.4375 15.9099 13.5767C16.1841 13.7159 16.4283 13.9077 16.6284 14.1413C16.8285 14.3748 16.9806 14.6455 17.0761 14.9378C17.1716 15.2302 17.2086 15.5385 17.185 15.8451C17.1613 16.1517 17.0775 16.4507 16.9384 16.725C16.7992 16.9992 16.6073 17.2434 16.3738 17.4435C16.1403 17.6436 15.8696 17.7957 15.5773 17.8912C15.2849 17.9867 14.9766 18.0237 14.67 18.0001H14.7ZM17.14 11.8901C17.0002 11.9014 16.8598 11.9014 16.72 11.8901C16.4892 11.7665 16.2484 11.6628 16 11.5801C15.588 10.6832 14.9633 9.90055 14.18 9.30009C14.18 9.18009 14.18 9.05009 14.18 8.93009C14.18 8.49677 14.2738 8.06859 14.4551 7.675C14.6363 7.2814 14.9007 6.93175 15.23 6.65009C15.3848 7.71695 15.8803 8.70519 16.6426 9.46747C17.4049 10.2298 18.3931 10.7253 19.46 10.8801C19.1669 11.2112 18.8043 11.4735 18.398 11.6481C17.9918 11.8227 17.5519 11.9053 17.11 11.8901H17.14Z" fill={props.color}/>
</svg>
  );
}