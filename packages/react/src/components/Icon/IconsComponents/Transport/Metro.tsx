import React from 'react';
import { IconProps } from "../styles";

export function Metro(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M8.71001 14.29C8.56929 14.1515 8.39075 14.0576 8.19684 14.0202C8.00293 13.9829 7.8023 14.0037 7.62017 14.08C7.49611 14.125 7.38344 14.1966 7.29012 14.2899C7.19681 14.3833 7.12514 14.4959 7.08017 14.62C7.01531 14.7721 6.98917 14.9379 7.0041 15.1026C7.01902 15.2672 7.07453 15.4256 7.16568 15.5636C7.25682 15.7015 7.38075 15.8147 7.52637 15.8931C7.67198 15.9714 7.83475 16.0124 8.00009 16.0124C8.16544 16.0124 8.32821 15.9714 8.47382 15.8931C8.61944 15.8147 8.74337 15.7015 8.83451 15.5636C8.92566 15.4256 8.98117 15.2672 8.99609 15.1026C9.01102 14.9379 8.98488 14.7721 8.92001 14.62C8.86942 14.4988 8.79839 14.3872 8.71001 14.29ZM16.71 14.29C16.5167 14.1115 16.2632 14.0124 16.0001 14.0124C15.7369 14.0124 15.4834 14.1115 15.2901 14.29C15.2017 14.3872 15.1307 14.4988 15.0801 14.6201C15.0021 14.8019 14.9804 15.003 15.0178 15.1973C15.0552 15.3916 15.15 15.5702 15.29 15.71C15.3872 15.7984 15.4989 15.8694 15.6201 15.92C15.7398 15.9728 15.8692 16.0001 16 16.0001C16.1308 16.0001 16.2602 15.9728 16.3799 15.92C16.501 15.8692 16.6126 15.7982 16.7099 15.71C16.8499 15.5702 16.9448 15.3916 16.9822 15.1973C17.0196 15.003 16.9979 14.802 16.9199 14.6202C16.8694 14.4989 16.7984 14.3872 16.71 14.29ZM19.3094 18.8953C20.0174 18.331 20.5578 17.584 20.8722 16.7351C21.1867 15.8861 21.2633 14.9674 21.0938 14.0781L19.5938 6.07808C19.3788 4.93216 18.77 3.89741 17.8729 3.15275C16.9758 2.40809 15.8466 2.00034 14.6807 2H9.31935C8.15343 2.00035 7.02428 2.40811 6.12715 3.15278C5.23002 3.89745 4.62131 4.9322 4.40626 6.07812L2.90626 14.0781C2.73675 14.9674 2.81336 15.8862 3.12782 16.7351C3.44229 17.5841 3.98267 18.331 4.69062 18.8953L3.29301 20.293C3.19879 20.3855 3.12382 20.4958 3.07245 20.6175C3.02109 20.7392 2.99433 20.8698 2.99373 21.0019C2.99313 21.1339 3.0187 21.2648 3.06897 21.387C3.11923 21.5091 3.19319 21.62 3.28658 21.7134C3.37997 21.8068 3.49093 21.8808 3.61306 21.931C3.73519 21.9813 3.86607 22.0069 3.99814 22.0063C4.13021 22.0057 4.26085 21.9789 4.38252 21.9276C4.50419 21.8762 4.61448 21.8012 4.70701 21.707L6.57615 19.8379C6.98212 19.9438 7.3998 19.9983 7.81936 20H16.1807C16.6002 19.9983 17.0179 19.9438 17.4238 19.8379L19.293 21.707C19.4811 21.8917 19.7345 21.9947 19.9981 21.9935C20.2618 21.9923 20.5142 21.887 20.7006 21.7006C20.887 21.5142 20.9923 21.2617 20.9935 20.9981C20.9947 20.7345 20.8917 20.4811 20.707 20.293L19.3094 18.8953ZM6.3711 6.44727C6.5004 5.75974 6.86574 5.13895 7.40404 4.69213C7.94233 4.2453 8.61977 4.0005 9.31935 4H14.6807C15.3803 4.0005 16.0577 4.2453 16.596 4.69213C17.1343 5.13895 17.4996 5.75974 17.6289 6.44727L17.9756 8.2962C17.229 9.14576 16.3099 9.82636 15.2794 10.2926C14.249 10.7588 13.131 11 12 11C10.869 11 9.75102 10.7588 8.7206 10.2926C7.69018 9.82636 6.77102 9.14576 6.02442 8.2962L6.3711 6.44727ZM18.4883 16.916C18.2073 17.2556 17.8548 17.5289 17.4558 17.7163C17.0569 17.9037 16.6214 18.0006 16.1807 18H7.81936C7.37862 17.9998 6.94334 17.9026 6.54444 17.7152C6.14555 17.5278 5.79284 17.2548 5.51139 16.9156C5.22993 16.5764 5.02665 16.1795 4.91599 15.7528C4.80533 15.3262 4.79 14.8805 4.8711 14.4473L5.58216 10.6549C7.37776 12.1693 9.65105 13 12 13C14.349 13 16.6223 12.1693 18.4179 10.6549L19.1289 14.4473C19.2108 14.8805 19.1958 15.3266 19.085 15.7534C18.9743 16.1802 18.7705 16.5772 18.4883 16.916Z" fill={props.color}/>
</svg>
  );
}