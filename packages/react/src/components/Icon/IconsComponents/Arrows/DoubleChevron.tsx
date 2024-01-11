import React from 'react';
import { IconProps } from "../styles";

export function DoubleChevron(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M11.46 8.28994C11.367 8.19621 11.2564 8.12182 11.1346 8.07105C11.0127 8.02028 10.882 7.99414 10.75 7.99414C10.618 7.99414 10.4873 8.02028 10.3654 8.07105C10.2436 8.12182 10.133 8.19621 10.04 8.28994L7.04 11.2899C6.94627 11.3829 6.87188 11.4935 6.82111 11.6154C6.77034 11.7372 6.7442 11.8679 6.7442 11.9999C6.7442 12.132 6.77034 12.2627 6.82111 12.3845C6.87188 12.5064 6.94627 12.617 7.04 12.7099L10.04 15.7099C10.133 15.8037 10.2436 15.8781 10.3654 15.9288C10.4873 15.9796 10.618 16.0057 10.75 16.0057C10.882 16.0057 11.0127 15.9796 11.1346 15.9288C11.2564 15.8781 11.367 15.8037 11.46 15.7099C11.5537 15.617 11.6281 15.5064 11.6789 15.3845C11.7297 15.2627 11.7558 15.132 11.7558 14.9999C11.7558 14.8679 11.7297 14.7372 11.6789 14.6154C11.6281 14.4935 11.5537 14.3829 11.46 14.2899L9.16 11.9999L11.46 9.70994C11.5537 9.61698 11.6281 9.50638 11.6789 9.38452C11.7297 9.26266 11.7558 9.13195 11.7558 8.99994C11.7558 8.86793 11.7297 8.73722 11.6789 8.61536C11.6281 8.4935 11.5537 8.3829 11.46 8.28994ZM14.66 11.9999L17 9.70994C17.1883 9.52164 17.2941 9.26624 17.2941 8.99994C17.2941 8.73364 17.1883 8.47824 17 8.28994C16.8117 8.10164 16.5563 7.99585 16.29 7.99585C16.0237 7.99585 15.7683 8.10164 15.58 8.28994L12.58 11.2899C12.4863 11.3829 12.4119 11.4935 12.3611 11.6154C12.3103 11.7372 12.2842 11.8679 12.2842 11.9999C12.2842 12.132 12.3103 12.2627 12.3611 12.3845C12.4119 12.5064 12.4863 12.617 12.58 12.7099L15.58 15.7099C15.673 15.8037 15.7836 15.8781 15.9054 15.9288C16.0273 15.9796 16.158 16.0057 16.29 16.0057C16.422 16.0057 16.5527 15.9796 16.6746 15.9288C16.7964 15.8781 16.907 15.8037 17 15.7099C17.0937 15.617 17.1681 15.5064 17.2189 15.3845C17.2697 15.2627 17.2958 15.132 17.2958 14.9999C17.2958 14.8679 17.2697 14.7372 17.2189 14.6154C17.1681 14.4935 17.0937 14.3829 17 14.2899L14.66 11.9999Z" fill={props.color}/>
</svg>
  );
}