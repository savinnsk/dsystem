import React from 'react';
import { IconProps } from "../styles";

export function Gift(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M18 7.00004H17.65C17.8782 6.5328 17.9979 6.02002 18 5.50004C18.003 4.80336 17.7975 4.12173 17.4098 3.54287C17.0221 2.96401 16.4701 2.51442 15.8247 2.25198C15.1794 1.98953 14.4703 1.92624 13.7886 2.07025C13.107 2.21426 12.4841 2.55898 12 3.06004C11.5159 2.55898 10.893 2.21426 10.2114 2.07025C9.52975 1.92624 8.82061 1.98953 8.17525 2.25198C7.5299 2.51442 6.97786 2.96401 6.59019 3.54287C6.20252 4.12173 5.99697 4.80336 6 5.50004C6.00213 6.02002 6.12178 6.5328 6.35 7.00004H6C5.20435 7.00004 4.44129 7.31611 3.87868 7.87872C3.31607 8.44133 3 9.20439 3 10V12C3 12.2653 3.10536 12.5196 3.29289 12.7071C3.48043 12.8947 3.73478 13 4 13H5V19C5 19.7957 5.31607 20.5588 5.87868 21.1214C6.44129 21.684 7.20435 22 8 22H16C16.7956 22 17.5587 21.684 18.1213 21.1214C18.6839 20.5588 19 19.7957 19 19V13H20C20.2652 13 20.5196 12.8947 20.7071 12.7071C20.8946 12.5196 21 12.2653 21 12V10C21 9.20439 20.6839 8.44133 20.1213 7.87872C19.5587 7.31611 18.7956 7.00004 18 7.00004ZM11 20H8C7.73478 20 7.48043 19.8947 7.29289 19.7071C7.10536 19.5196 7 19.2653 7 19V13H11V20ZM11 11H5V10C5 9.73482 5.10536 9.48047 5.29289 9.29293C5.48043 9.10539 5.73478 9.00004 6 9.00004H11V11ZM11 7.00004H9.5C9.20333 7.00004 8.91332 6.91206 8.66665 6.74724C8.41997 6.58242 8.22771 6.34815 8.11418 6.07406C8.00065 5.79997 7.97094 5.49837 8.02882 5.2074C8.0867 4.91643 8.22956 4.64916 8.43934 4.43938C8.64912 4.2296 8.91639 4.08674 9.20736 4.02886C9.49834 3.97098 9.79994 4.00069 10.074 4.11422C10.3481 4.22775 10.5824 4.42001 10.7472 4.66668C10.912 4.91336 11 5.20337 11 5.50004V7.00004ZM13 5.50004C13 5.20337 13.088 4.91336 13.2528 4.66668C13.4176 4.42001 13.6519 4.22775 13.926 4.11422C14.2001 4.00069 14.5017 3.97098 14.7926 4.02886C15.0836 4.08674 15.3509 4.2296 15.5607 4.43938C15.7704 4.64916 15.9133 4.91643 15.9712 5.2074C16.0291 5.49837 15.9994 5.79997 15.8858 6.07406C15.7723 6.34815 15.58 6.58242 15.3334 6.74724C15.0867 6.91206 14.7967 7.00004 14.5 7.00004H13V5.50004ZM17 19C17 19.2653 16.8946 19.5196 16.7071 19.7071C16.5196 19.8947 16.2652 20 16 20H13V13H17V19ZM19 11H13V9.00004H18C18.2652 9.00004 18.5196 9.10539 18.7071 9.29293C18.8946 9.48047 19 9.73482 19 10V11Z" fill={props.color}/>
</svg>
  );
}