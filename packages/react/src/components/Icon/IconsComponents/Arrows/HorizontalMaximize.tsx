import React from 'react';
import { IconProps } from "../styles";

export function HorizontalMaximize(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21.92 11.6199C21.8724 11.4972 21.801 11.385 21.71 11.2899L17.71 7.28994C17.6167 7.1967 17.5061 7.12274 17.3842 7.07228C17.2624 7.02182 17.1318 6.99585 17 6.99585C16.7337 6.99585 16.4783 7.10164 16.29 7.28994C16.1017 7.47825 15.9959 7.73364 15.9959 7.99994C15.9959 8.26624 16.1017 8.52164 16.29 8.70994L18.59 10.9999H5.40999L7.70999 8.70994C7.80323 8.6167 7.87719 8.50601 7.92765 8.38419C7.97811 8.26237 8.00408 8.1318 8.00408 7.99994C8.00408 7.86808 7.97811 7.73751 7.92765 7.61569C7.87719 7.49387 7.80323 7.38318 7.70999 7.28994C7.61675 7.1967 7.50606 7.12274 7.38424 7.07228C7.26242 7.02182 7.13185 6.99585 6.99999 6.99585C6.86813 6.99585 6.73756 7.02182 6.61574 7.07228C6.49392 7.12274 6.38323 7.1967 6.28999 7.28994L2.28999 11.2899C2.19895 11.385 2.12758 11.4972 2.07999 11.6199C1.97997 11.8634 1.97997 12.1365 2.07999 12.3799C2.12758 12.5027 2.19895 12.6148 2.28999 12.7099L6.28999 16.7099C6.38295 16.8037 6.49355 16.8781 6.61541 16.9288C6.73727 16.9796 6.86798 17.0057 6.99999 17.0057C7.132 17.0057 7.26271 16.9796 7.38456 16.9288C7.50642 16.8781 7.61702 16.8037 7.70999 16.7099C7.80372 16.617 7.87811 16.5064 7.92888 16.3845C7.97965 16.2627 8.00579 16.132 8.00579 15.9999C8.00579 15.8679 7.97965 15.7372 7.92888 15.6154C7.87811 15.4935 7.80372 15.3829 7.70999 15.2899L5.40999 12.9999H18.59L16.29 15.2899C16.1963 15.3829 16.1219 15.4935 16.0711 15.6154C16.0203 15.7372 15.9942 15.8679 15.9942 15.9999C15.9942 16.132 16.0203 16.2627 16.0711 16.3845C16.1219 16.5064 16.1963 16.617 16.29 16.7099C16.383 16.8037 16.4936 16.8781 16.6154 16.9288C16.7373 16.9796 16.868 17.0057 17 17.0057C17.132 17.0057 17.2627 16.9796 17.3846 16.9288C17.5064 16.8781 17.617 16.8037 17.71 16.7099L21.71 12.7099C21.801 12.6148 21.8724 12.5027 21.92 12.3799C22.02 12.1365 22.02 11.8634 21.92 11.6199Z" fill={props.color}/>
</svg>
  );
}