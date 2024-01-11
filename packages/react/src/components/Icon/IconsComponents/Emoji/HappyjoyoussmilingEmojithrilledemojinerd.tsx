import React from 'react';
import { IconProps } from "../styles";

export function HappyNerd(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21.41 8.65C21.41 8.65 21.41 8.65 21.41 8.59C20.7116 6.66395 19.4384 4.9989 17.7627 3.8201C16.087 2.64129 14.0897 2.00562 12.041 1.99907C9.99219 1.99253 7.99086 2.61542 6.30768 3.7835C4.6245 4.95157 3.34072 6.60845 2.63 8.53C2.59151 8.60556 2.56454 8.68646 2.55 8.77C2.18799 9.80851 2.00209 10.9002 2 12C1.99505 13.46 2.30987 14.9034 2.92234 16.2288C3.53481 17.5542 4.43007 18.7293 5.54523 19.6718C6.66039 20.6142 7.96838 21.301 9.37732 21.6839C10.7862 22.0668 12.2619 22.1365 13.7007 21.8882C15.1395 21.6399 16.5064 21.0795 17.7055 20.2465C18.9046 19.4135 19.9067 18.328 20.6414 17.0663C21.3762 15.8046 21.8257 14.3973 21.9585 12.9433C22.0913 11.4893 21.9041 10.0239 21.41 8.65ZM12 4C13.4029 4.00144 14.7808 4.37177 15.9953 5.07385C17.2099 5.77592 18.2185 6.78505 18.92 8H17.72C17.4226 7.67313 17.0567 7.416 16.6485 7.24696C16.2402 7.07793 15.7996 7.00118 15.3582 7.0222C14.9168 7.04322 14.4855 7.16149 14.0951 7.36855C13.7048 7.57561 13.365 7.86636 13.1 8.22C12.7493 8.08186 12.3768 8.00736 12 8C11.6232 8.00736 11.2507 8.08186 10.9 8.22C10.635 7.86636 10.2952 7.57561 9.90486 7.36855C9.51448 7.16149 9.08319 7.04322 8.6418 7.0222C8.20041 7.00118 7.75983 7.07793 7.35154 7.24696C6.94326 7.416 6.57736 7.67313 6.28 8H5.08C5.78145 6.78505 6.79006 5.77592 8.00465 5.07385C9.21924 4.37177 10.5971 4.00144 12 4ZM16.5 10C16.5 10.1978 16.4413 10.3911 16.3315 10.5556C16.2216 10.72 16.0654 10.8482 15.8827 10.9239C15.7 10.9996 15.4989 11.0194 15.3049 10.9808C15.1109 10.9422 14.9327 10.847 14.7929 10.7071C14.653 10.5673 14.5578 10.3891 14.5192 10.1951C14.4806 10.0011 14.5004 9.80004 14.5761 9.61732C14.6518 9.43459 14.78 9.27841 14.9444 9.16853C15.1089 9.05865 15.3022 9 15.5 9C15.7652 9 16.0196 9.10536 16.2071 9.29289C16.3946 9.48043 16.5 9.73478 16.5 10ZM9.5 10C9.5 10.1978 9.44135 10.3911 9.33147 10.5556C9.22158 10.72 9.06541 10.8482 8.88268 10.9239C8.69995 10.9996 8.49889 11.0194 8.30491 10.9808C8.11093 10.9422 7.93274 10.847 7.79289 10.7071C7.65304 10.5673 7.5578 10.3891 7.51921 10.1951C7.48063 10.0011 7.50043 9.80004 7.57612 9.61732C7.6518 9.43459 7.77998 9.27841 7.94443 9.16853C8.10888 9.05865 8.30222 9 8.5 9C8.76521 9 9.01957 9.10536 9.2071 9.29289C9.39464 9.48043 9.5 9.73478 9.5 10ZM12 20C9.87826 20 7.84343 19.1571 6.34314 17.6569C4.84285 16.1566 4 14.1217 4 12C4.00444 11.3252 4.09176 10.6535 4.26 10H5.5C5.47613 10.7956 5.76931 11.5682 6.31504 12.1477C6.86077 12.7272 7.61435 13.0661 8.41 13.09C9.20565 13.1139 9.97819 12.8207 10.5577 12.275C11.1372 11.7292 11.4761 10.9756 11.5 10.18C11.652 10.0922 11.8245 10.046 12 10.046C12.1755 10.046 12.348 10.0922 12.5 10.18C12.5239 10.9756 12.8628 11.7292 13.4423 12.275C14.0218 12.8207 14.7943 13.1139 15.59 13.09C16.3856 13.0661 17.1392 12.7272 17.685 12.1477C18.2307 11.5682 18.5239 10.7956 18.5 10H19.74C19.9082 10.6535 19.9956 11.3252 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM14.36 14.23C13.6915 14.769 12.8587 15.0629 12 15.0629C11.1413 15.0629 10.3085 14.769 9.64 14.23C9.43578 14.0603 9.1725 13.9786 8.90807 14.003C8.64365 14.0274 8.39974 14.1558 8.23 14.36C8.06026 14.5642 7.9786 14.8275 8.00298 15.0919C8.02736 15.3563 8.15578 15.6003 8.36 15.77C9.38133 16.6226 10.6696 17.0896 12 17.0896C13.3304 17.0896 14.6187 16.6226 15.64 15.77C15.8442 15.6003 15.9726 15.3563 15.997 15.0919C16.0214 14.8275 15.9397 14.5642 15.77 14.36C15.686 14.2589 15.5828 14.1753 15.4665 14.1141C15.3501 14.0528 15.2229 14.0151 15.0919 14.003C14.8275 13.9786 14.5642 14.0603 14.36 14.23Z" fill={props.color}/>
</svg>
  );
}