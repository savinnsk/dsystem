import React from 'react';
import { IconProps } from "../styles";

export function Snapchat2(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21.9512 15.6142C21.3339 15.4706 20.7518 15.2041 20.2396 14.8309C19.7274 14.4576 19.2955 13.985 18.9697 13.4414C18.8211 13.2218 18.5912 13.0702 18.3308 13.02C18.0704 12.9698 17.8007 13.0251 17.5811 13.1738C17.3614 13.3225 17.2098 13.5523 17.1597 13.8127C17.1095 14.0731 17.1648 14.3428 17.3135 14.5625C17.933 15.5076 18.7532 16.3045 19.7158 16.8965C19.581 16.9219 19.4346 16.9463 19.2744 16.9717C18.9899 17.0322 18.7322 17.1819 18.5387 17.3989C18.3451 17.616 18.2259 17.8892 18.1982 18.1787C17.5316 18.065 16.8507 18.0637 16.1836 18.1748C15.4643 18.3335 14.7931 18.6613 14.2256 19.1308C13.6417 19.6485 12.901 19.9553 12.1221 20.0019H11.8613C11.0815 19.9551 10.34 19.6477 9.75585 19.1289C9.19638 18.6655 8.53565 18.3403 7.82714 18.1797C7.15132 18.0717 6.46255 18.0731 5.78714 18.1836C5.76077 17.8955 5.64372 17.6231 5.45281 17.4057C5.26189 17.1883 5.00695 17.037 4.72464 16.9736C4.56741 16.9492 4.42288 16.9248 4.29007 16.8994C4.9698 16.5062 5.57693 15.9991 6.08499 15.4004C6.31946 15.1284 6.53173 14.8381 6.71976 14.5322C6.86009 14.3074 6.90543 14.0361 6.84582 13.7779C6.78621 13.5197 6.62653 13.2957 6.40186 13.1551C6.17719 13.0146 5.90591 12.969 5.64764 13.0283C5.38936 13.0877 5.16521 13.2471 5.02444 13.4717C4.89123 13.6884 4.74136 13.8944 4.5762 14.0879C3.93711 14.8881 3.03067 15.4308 2.02347 15.6162C1.73114 15.6625 1.46549 15.8132 1.2757 16.0403C1.08591 16.2674 0.984844 16.5556 0.991204 16.8515C0.990868 17.0355 1.03017 17.2174 1.10644 17.3847C1.42187 18.1006 2.26171 18.5527 3.89061 18.8594L3.92187 18.9892C3.95019 19.1074 3.97948 19.2275 4.01366 19.3369C4.09033 19.6147 4.25792 19.8588 4.48965 20.0302C4.72139 20.2016 5.00388 20.2903 5.29198 20.2822C5.49555 20.277 5.69779 20.2478 5.89452 20.1953C6.41763 20.0893 6.95504 20.0738 7.48339 20.1494C7.89773 20.2721 8.28077 20.4826 8.60644 20.7666C9.52577 21.5256 10.6699 21.9598 11.8613 22.002H12.1221C13.3209 21.958 14.4716 21.5192 15.3955 20.754C15.7227 20.4692 16.1094 20.261 16.5273 20.1446C16.7333 20.1083 16.9422 20.0907 17.1513 20.0919C17.4727 20.0913 17.7931 20.127 18.1064 20.1983C18.3094 20.2362 18.5152 20.2574 18.7216 20.2618C19.0025 20.2694 19.2778 20.1826 19.5035 20.0153C19.7292 19.848 19.8923 19.6098 19.9668 19.3389C20.0048 19.2169 20.0341 19.0997 20.0615 18.9844L20.0927 18.8604C21.7167 18.5548 22.5595 18.1056 22.8603 17.42C22.9364 17.2711 22.9797 17.1076 22.9873 16.9405C23.0121 16.6299 22.9193 16.3212 22.7275 16.0756C22.5356 15.8301 22.2586 15.6654 21.9512 15.6142ZM3.80175 11.1484C4.00636 11.1872 4.21795 11.1614 4.40725 11.0746C4.59655 10.9878 4.7542 10.8443 4.85839 10.664C5.25448 10.8656 5.68887 10.9808 6.1328 11.0019C6.60382 11.0082 7.0584 10.8289 7.39843 10.5029C7.506 10.4026 7.59013 10.2798 7.64482 10.1432C7.6995 10.0067 7.72341 9.85977 7.71483 9.71293L7.6787 9.11137C7.5149 7.92449 7.56786 6.71774 7.83499 5.54978C8.17246 4.78263 8.72873 4.13209 9.43416 3.67958C10.1396 3.22707 10.9628 2.99271 11.8008 3.00584L12.1885 3.00193C13.0257 2.99075 13.8477 3.22631 14.5519 3.67923C15.2561 4.13214 15.8114 4.78237 16.1485 5.54881C16.4157 6.71774 16.4686 7.92543 16.3048 9.11326L16.295 9.27635L16.2677 9.71971C16.2621 9.86412 16.2871 10.0081 16.3409 10.1422C16.3948 10.2763 16.4763 10.3975 16.5802 10.498C16.9167 10.8225 17.3665 11.003 17.8341 11.001C18.268 10.9631 18.69 10.8389 19.0753 10.6357C19.1534 10.8136 19.2816 10.965 19.4442 11.0713C19.6069 11.1776 19.797 11.2343 19.9913 11.2344H20.0089C20.2741 11.2297 20.5266 11.1198 20.7108 10.929C20.895 10.7382 20.9959 10.482 20.9913 10.2168C20.9653 9.88282 20.8378 9.5648 20.6259 9.3054C20.414 9.04601 20.1278 8.85764 19.8057 8.7656C19.5712 8.66954 19.3198 8.62103 19.0664 8.62288C18.8129 8.62472 18.5623 8.67689 18.3292 8.77635C18.5044 7.41922 18.3834 6.04025 17.9747 4.73435C17.4826 3.61128 16.6703 2.65822 15.6394 1.99436C14.6085 1.33049 13.4048 0.98529 12.1788 1.00192L11.7862 1.00583C10.5633 0.990881 9.36302 1.33667 8.33549 1.99997C7.30795 2.66328 6.49867 3.61469 6.00878 4.73533C5.59696 6.05877 5.47701 7.45578 5.65722 8.83006C5.62304 8.81443 5.58593 8.79686 5.54589 8.7783C5.30154 8.67942 5.03935 8.63222 4.77585 8.6397C4.51235 8.64717 4.25325 8.70915 4.01489 8.82172C3.77653 8.9343 3.56408 9.09503 3.39092 9.29378C3.21776 9.49253 3.08765 9.725 3.00878 9.97654C2.95881 10.2371 3.01424 10.5068 3.16291 10.7265C3.31157 10.9462 3.54133 11.0979 3.80175 11.1484Z" fill={props.color}/>
</svg>
  );
}