import React from 'react';
import { IconProps } from "../styles";

export function LilyFlower(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M19.68 6.87994C18.661 6.34439 17.4727 6.22951 16.37 6.55994C16.3163 5.43841 15.833 4.38058 15.0203 3.60584C14.2075 2.83111 13.1278 2.39893 12.005 2.39893C10.8822 2.39893 9.80245 2.83111 8.98974 3.60584C8.17702 4.38058 7.69369 5.43841 7.64 6.55994C6.54028 6.22875 5.35537 6.33257 4.33 6.84994C3.57489 7.24683 2.95246 7.85604 2.53946 8.60245C2.12645 9.34886 1.94094 10.1998 2.0058 11.0504C2.07066 11.901 2.38305 12.714 2.90444 13.3892C3.42584 14.0643 4.13345 14.5721 4.94 14.8499C4.42519 15.5825 4.1461 16.4546 4.14 17.3499C4.14444 17.6013 4.16784 17.8521 4.21 18.0999C4.3784 19.1155 4.9023 20.0381 5.68814 20.703C6.47398 21.368 7.47059 21.7319 8.5 21.7299C8.71308 21.7445 8.92692 21.7445 9.14 21.7299C10.283 21.5499 11.3099 20.9287 12 19.9999C12.6973 20.9137 13.7232 21.5199 14.86 21.6899C15.0731 21.7045 15.2869 21.7045 15.5 21.6899C16.2981 21.689 17.0807 21.469 17.7624 21.0539C18.4442 20.6388 18.9989 20.0446 19.3661 19.3359C19.7333 18.6273 19.899 17.8314 19.845 17.0351C19.791 16.2388 19.5195 15.4726 19.06 14.8199C19.8705 14.5469 20.5828 14.0416 21.1082 13.3668C21.6337 12.692 21.9491 11.8776 22.0152 11.0249C22.0813 10.1723 21.8951 9.31898 21.4799 8.5713C21.0647 7.82362 20.4387 7.21456 19.68 6.81994V6.87994ZM10.34 4.93994C10.7867 4.51209 11.3814 4.27326 12 4.27326C12.6186 4.27326 13.2133 4.51209 13.66 4.93994C14.0011 5.28153 14.2327 5.71696 14.3253 6.19071C14.4179 6.66446 14.3673 7.15506 14.18 7.59994L13.92 8.18994L13.26 8.76994C12.8542 8.63066 12.429 8.55641 12 8.54994C11.4456 8.55047 10.8973 8.66625 10.39 8.88994L9.83 7.59994C9.63593 7.15702 9.58078 6.66565 9.67183 6.19072C9.76289 5.7158 9.99587 5.27967 10.34 4.93994ZM4.24 11.7799C4.01676 11.2887 3.96782 10.736 4.10129 10.2132C4.23475 9.69037 4.54262 9.22875 4.97401 8.90463C5.40539 8.5805 5.93446 8.41329 6.47377 8.43062C7.01307 8.44795 7.53031 8.64879 7.94 8.99994L8.43 9.42994L8.78 10.2299C8.27904 10.9002 8.00571 11.7132 8 12.5499C7.98814 12.6997 7.98814 12.8502 8 12.9999H7.45L6.61 13.0799C6.12955 13.1306 5.64507 13.0333 5.22149 12.801C4.79791 12.5686 4.45545 12.2124 4.24 11.7799ZM10.84 17.8599C10.7196 18.3938 10.4189 18.8698 9.98862 19.2079C9.55829 19.546 9.02461 19.7254 8.47745 19.716C7.93029 19.7066 7.40308 19.509 6.98461 19.1563C6.56614 18.8037 6.28199 18.3176 6.18 17.7799C6.17041 17.6401 6.17041 17.4998 6.18 17.3599C6.18362 16.9535 6.29351 16.555 6.49876 16.2042C6.70401 15.8533 6.99747 15.5623 7.35 15.3599L7.86 14.9999L8.77 14.8999C9.34355 15.6978 10.1907 16.2567 11.15 16.4699L10.84 17.8599ZM12 14.5499C11.6044 14.5499 11.2178 14.4326 10.8889 14.2129C10.56 13.9931 10.3036 13.6808 10.1522 13.3153C10.0009 12.9499 9.96126 12.5477 10.0384 12.1598C10.1156 11.7718 10.3061 11.4154 10.5858 11.1357C10.8655 10.856 11.2219 10.6655 11.6098 10.5884C11.9978 10.5112 12.3999 10.5508 12.7654 10.7022C13.1308 10.8536 13.4432 11.1099 13.6629 11.4388C13.8827 11.7677 14 12.1544 14 12.5499C14 13.0804 13.7893 13.5891 13.4142 13.9642C13.0391 14.3392 12.5304 14.5499 12 14.5499ZM17.82 17.7699C17.7168 18.3801 17.3781 18.9253 16.8769 19.2882C16.3756 19.6511 15.7519 19.8025 15.14 19.7099C14.6579 19.642 14.208 19.4284 13.8506 19.0978C13.4932 18.7672 13.2452 18.3353 13.14 17.8599L13 17.2599L13.21 16.3399C14.1325 16.0395 14.9144 15.414 15.41 14.5799L15.91 14.8799H16L16.66 15.2699C17.0888 15.5148 17.4308 15.887 17.6387 16.335C17.8465 16.7829 17.9099 17.2844 17.82 17.7699ZM19.76 11.7699C19.5633 12.1674 19.2599 12.5023 18.8837 12.7372C18.5076 12.9721 18.0735 13.0977 17.63 13.0999H17.39L16.75 12.9999L16 12.5899C15.9986 11.6177 15.6431 10.6792 15 9.94994L15.43 9.57994L16.06 8.99994C16.4709 8.63468 16.9959 8.42361 17.5453 8.40287C18.0946 8.38213 18.6341 8.55301 19.0713 8.88624C19.5085 9.21948 19.8163 9.69435 19.9419 10.2295C20.0676 10.7647 20.0033 11.327 19.76 11.8199V11.7699Z" fill={props.color}/>
</svg>
  );
}