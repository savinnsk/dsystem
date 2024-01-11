import React from 'react';
import { IconProps } from "../styles";

export function ColorPalette(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M7.42002 15.54C7.23377 15.7274 7.12923 15.9808 7.12923 16.245C7.12923 16.5092 7.23377 16.7627 7.42002 16.95C7.51298 17.0437 7.62358 17.1181 7.74544 17.1689C7.8673 17.2197 7.99801 17.2458 8.13002 17.2458C8.26203 17.2458 8.39274 17.2197 8.5146 17.1689C8.63646 17.1181 8.74706 17.0437 8.84002 16.95C9.02627 16.7627 9.13081 16.5092 9.13081 16.245C9.13081 15.9808 9.02627 15.7274 8.84002 15.54C8.74706 15.4463 8.63646 15.3719 8.5146 15.3211C8.39274 15.2704 8.26203 15.2442 8.13002 15.2442C7.99801 15.2442 7.8673 15.2704 7.74544 15.3211C7.62358 15.3719 7.51298 15.4463 7.42002 15.54ZM7.42002 7.05002C7.23377 7.23738 7.12923 7.49083 7.12923 7.75502C7.12923 8.0192 7.23377 8.27265 7.42002 8.46002C7.51298 8.55375 7.62358 8.62814 7.74544 8.67891C7.8673 8.72968 7.99801 8.75582 8.13002 8.75582C8.26203 8.75582 8.39274 8.72968 8.5146 8.67891C8.63646 8.62814 8.74706 8.55375 8.84002 8.46002C9.02627 8.27265 9.13081 8.0192 9.13081 7.75502C9.13081 7.49083 9.02627 7.23738 8.84002 7.05002C8.74706 6.95629 8.63646 6.88189 8.5146 6.83113C8.39274 6.78036 8.26203 6.75422 8.13002 6.75422C7.99801 6.75422 7.8673 6.78036 7.74544 6.83113C7.62358 6.88189 7.51298 6.95629 7.42002 7.05002ZM12.37 17.05C12.1722 17.05 11.9789 17.1087 11.8145 17.2185C11.65 17.3284 11.5218 17.4846 11.4461 17.6673C11.3705 17.8501 11.3506 18.0511 11.3892 18.2451C11.4278 18.4391 11.5231 18.6173 11.6629 18.7571C11.8028 18.897 11.9809 18.9922 12.1749 19.0308C12.3689 19.0694 12.57 19.0496 12.7527 18.9739C12.9354 18.8982 13.0916 18.77 13.2015 18.6056C13.3114 18.4411 13.37 18.2478 13.37 18.05C13.3768 17.9145 13.356 17.7791 13.3087 17.652C13.2615 17.5248 13.189 17.4086 13.0954 17.3104C13.0019 17.2121 12.8893 17.134 12.7646 17.0806C12.6399 17.0273 12.5057 16.9998 12.37 17V17.05ZM6.37002 11.05C6.17224 11.05 5.9789 11.1087 5.81445 11.2185C5.65 11.3284 5.52183 11.4846 5.44614 11.6673C5.37045 11.8501 5.35065 12.0511 5.38924 12.2451C5.42782 12.4391 5.52306 12.6173 5.66291 12.7571C5.80277 12.897 5.98095 12.9922 6.17493 13.0308C6.36891 13.0694 6.56998 13.0496 6.7527 12.9739C6.93543 12.8982 7.09161 12.77 7.20149 12.6056C7.31137 12.4411 7.37002 12.2478 7.37002 12.05C7.3768 11.9145 7.35595 11.7791 7.30875 11.652C7.26154 11.5248 7.18895 11.4086 7.09541 11.3104C7.00187 11.2121 6.88932 11.134 6.76462 11.0806C6.63991 11.0273 6.50566 10.9998 6.37002 11V11.05ZM12.37 5.05002C12.1722 5.05002 11.9789 5.10867 11.8145 5.21855C11.65 5.32843 11.5218 5.48461 11.4461 5.66733C11.3705 5.85006 11.3506 6.05113 11.3892 6.24511C11.4278 6.43909 11.5231 6.61727 11.6629 6.75712C11.8028 6.89698 11.9809 6.99222 12.1749 7.0308C12.3689 7.06939 12.57 7.04958 12.7527 6.9739C12.9354 6.89821 13.0916 6.77004 13.2015 6.60559C13.3114 6.44114 13.37 6.2478 13.37 6.05002C13.3768 5.91455 13.356 5.77912 13.3087 5.65196C13.2615 5.5248 13.189 5.40858 13.0954 5.31036C13.0019 5.21214 12.8893 5.13398 12.7646 5.08062C12.6399 5.02727 12.5057 4.99985 12.37 5.00002V5.05002ZM15.91 7.10002C15.7696 7.23963 15.6737 7.4178 15.6347 7.61195C15.5956 7.80609 15.6151 8.00746 15.6906 8.19053C15.7661 8.37361 15.8943 8.53014 16.0588 8.64028C16.2234 8.75042 16.417 8.80922 16.615 8.80922C16.8131 8.80922 17.0066 8.75042 17.1712 8.64028C17.3358 8.53014 17.464 8.37361 17.5395 8.19053C17.615 8.00746 17.6344 7.80609 17.5954 7.61195C17.5563 7.4178 17.4605 7.23963 17.32 7.10002C17.1393 6.90697 16.8896 6.79334 16.6253 6.78397C16.3611 6.7746 16.1039 6.87025 15.91 7.05002V7.10002ZM22.21 7.10002C21.2958 5.27231 19.8904 3.73544 18.1516 2.66172C16.4128 1.588 14.4092 1.0199 12.3656 1.02112C10.322 1.02234 8.31914 1.59284 6.5816 2.66863C4.84407 3.74443 3.44057 5.28298 2.5285 7.11178C1.61643 8.94057 1.23184 10.9873 1.41787 13.0224C1.60389 15.0576 2.35317 17.0006 3.58169 18.6338C4.8102 20.2669 6.46938 21.5255 8.37316 22.2684C10.2769 23.0114 12.35 23.2093 14.36 22.84C14.8655 22.7449 15.3469 22.55 15.7761 22.2667C16.2054 21.9834 16.5739 21.6174 16.86 21.19C17.1684 20.7254 17.3811 20.2041 17.4858 19.6564C17.5906 19.1087 17.5852 18.5456 17.47 18C17.407 17.6703 17.3736 17.3357 17.37 17C17.3744 16.031 17.6603 15.0841 18.1929 14.2745C18.7255 13.465 19.4819 12.8276 20.37 12.44C20.8489 12.2256 21.2787 11.9153 21.633 11.5284C21.9873 11.1414 22.2586 10.6859 22.43 10.19C22.6034 9.6833 22.6733 9.14693 22.6355 8.6127C22.5977 8.07847 22.453 7.55728 22.21 7.08002V7.10002ZM20.51 9.54002C20.4247 9.77933 20.2922 9.99911 20.1205 10.1863C19.9487 10.3736 19.7411 10.5244 19.51 10.63C18.28 11.1806 17.2351 12.0746 16.5007 13.2045C15.7663 14.3345 15.3737 15.6524 15.37 17C15.3715 17.4701 15.4184 17.9389 15.51 18.4C15.5711 18.6818 15.5751 18.973 15.5219 19.2564C15.4686 19.5397 15.3592 19.8096 15.2 20.05C15.0653 20.2604 14.8881 20.4403 14.6797 20.5781C14.4713 20.7159 14.2364 20.8085 13.99 20.85C13.4559 20.9504 12.9135 21.0006 12.37 21C11.1642 21.0006 9.97054 20.7589 8.85994 20.2892C7.74935 19.8195 6.74447 19.1314 5.90498 18.2658C5.06549 17.4002 4.4085 16.3747 3.97304 15.2502C3.53757 14.1258 3.33251 12.9253 3.37002 11.72C3.44763 9.47281 4.35903 7.33497 5.92665 5.72298C7.49428 4.11099 9.60585 3.1403 11.85 3.00002H12.36C14.0358 3.00044 15.6781 3.4687 17.1021 4.35208C18.5261 5.23546 19.6752 6.49887 20.42 8.00002C20.6493 8.475 20.6816 9.0213 20.51 9.52002V9.54002ZM12.37 11C12.1722 11 11.9789 11.0587 11.8145 11.1685C11.65 11.2784 11.5218 11.4346 11.4461 11.6173C11.3705 11.8001 11.3506 12.0011 11.3892 12.1951C11.4278 12.3891 11.5231 12.5673 11.6629 12.7071C11.8028 12.847 11.9809 12.9422 12.1749 12.9808C12.3689 13.0194 12.57 12.9996 12.7527 12.9239C12.9354 12.8482 13.0916 12.72 13.2015 12.5556C13.3114 12.3911 13.37 12.1978 13.37 12C13.37 11.7348 13.2647 11.4804 13.0771 11.2929C12.8896 11.1054 12.6352 11 12.37 11Z" fill={props.color}/>
</svg>
  );
}