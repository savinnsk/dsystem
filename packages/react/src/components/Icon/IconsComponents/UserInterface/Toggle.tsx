import React from 'react';
import { IconProps } from "../styles";

export function Toggle(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.5C7.30777 8.5 6.63108 8.70527 6.0555 9.08986C5.47993 9.47444 5.03133 10.0211 4.76642 10.6606C4.50152 11.3001 4.4322 12.0039 4.56725 12.6828C4.7023 13.3617 5.03564 13.9854 5.52513 14.4749C6.01461 14.9644 6.63825 15.2977 7.31718 15.4327C7.99612 15.5678 8.69985 15.4985 9.33939 15.2336C9.97893 14.9687 10.5256 14.5201 10.9101 13.9445C11.2947 13.3689 11.5 12.6922 11.5 12C11.5 11.0717 11.1313 10.1815 10.4749 9.52513C9.8185 8.86875 8.92826 8.5 8 8.5ZM8 13.5C7.70333 13.5 7.41332 13.412 7.16664 13.2472C6.91997 13.0824 6.72771 12.8481 6.61418 12.574C6.50065 12.2999 6.47094 11.9983 6.52882 11.7074C6.5867 11.4164 6.72956 11.1491 6.93934 10.9393C7.14912 10.7296 7.41639 10.5867 7.70736 10.5288C7.99834 10.4709 8.29994 10.5006 8.57403 10.6142C8.84811 10.7277 9.08238 10.92 9.2472 11.1666C9.41203 11.4133 9.5 11.7033 9.5 12C9.5 12.3978 9.34196 12.7794 9.06066 13.0607C8.77936 13.342 8.39782 13.5 8 13.5ZM16 5H8C6.14348 5 4.36301 5.7375 3.05025 7.05025C1.7375 8.36301 1 10.1435 1 12C1 13.8565 1.7375 15.637 3.05025 16.9497C4.36301 18.2625 6.14348 19 8 19H16C17.8565 19 19.637 18.2625 20.9497 16.9497C22.2625 15.637 23 13.8565 23 12C23 10.1435 22.2625 8.36301 20.9497 7.05025C19.637 5.7375 17.8565 5 16 5ZM16 17H8C6.67392 17 5.40215 16.4732 4.46447 15.5355C3.52678 14.5979 3 13.3261 3 12C3 10.6739 3.52678 9.40215 4.46447 8.46447C5.40215 7.52678 6.67392 7 8 7H16C17.3261 7 18.5979 7.52678 19.5355 8.46447C20.4732 9.40215 21 10.6739 21 12C21 13.3261 20.4732 14.5979 19.5355 15.5355C18.5979 16.4732 17.3261 17 16 17Z" fill={props.color}/>
</svg>
  );
}