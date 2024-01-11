import React from 'react';
import { IconProps } from "../styles";

export function Ocean(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M17 15C16.6982 14.9997 16.4017 14.9204 16.14 14.77C15.6487 14.4664 15.0825 14.3056 14.505 14.3056C13.9274 14.3056 13.3613 14.4664 12.87 14.77C12.607 14.9219 12.3087 15.0018 12.005 15.0018C11.7013 15.0018 11.403 14.9219 11.14 14.77C10.6487 14.4664 10.0825 14.3056 9.50499 14.3056C8.92743 14.3056 8.36129 14.4664 7.86999 14.77C7.60517 14.9217 7.30514 15.001 6.99999 15C6.73477 15 6.48042 15.1054 6.29288 15.2929C6.10535 15.4805 5.99999 15.7348 5.99999 16C5.99999 16.2653 6.10535 16.5196 6.29288 16.7071C6.48042 16.8947 6.73477 17 6.99999 17C7.66854 17.0006 8.32489 16.8209 8.89999 16.48C9.07983 16.3673 9.28776 16.3076 9.49999 16.3076C9.71222 16.3076 9.92015 16.3673 10.1 16.48C10.676 16.8185 11.3319 16.997 12 16.997C12.6681 16.997 13.324 16.8185 13.9 16.48C14.0798 16.3673 14.2878 16.3076 14.5 16.3076C14.7122 16.3076 14.9202 16.3673 15.1 16.48C15.6751 16.8209 16.3314 17.0006 17 17C17.2652 17 17.5196 16.8947 17.7071 16.7071C17.8946 16.5196 18 16.2653 18 16C18 15.7348 17.8946 15.4805 17.7071 15.2929C17.5196 15.1054 17.2652 15 17 15ZM17 19C16.6982 18.9997 16.4017 18.9204 16.14 18.77C15.6487 18.4664 15.0825 18.3056 14.505 18.3056C13.9274 18.3056 13.3613 18.4664 12.87 18.77C12.607 18.9219 12.3087 19.0018 12.005 19.0018C11.7013 19.0018 11.403 18.9219 11.14 18.77C10.6487 18.4664 10.0825 18.3056 9.50499 18.3056C8.92743 18.3056 8.36129 18.4664 7.86999 18.77C7.60517 18.9217 7.30514 19.001 6.99999 19C6.73477 19 6.48042 19.1054 6.29288 19.2929C6.10535 19.4805 5.99999 19.7348 5.99999 20C5.99999 20.2652 6.10535 20.5196 6.29288 20.7071C6.48042 20.8947 6.73477 21 6.99999 21C7.66854 21.0006 8.32489 20.8209 8.89999 20.48C9.07983 20.3673 9.28776 20.3076 9.49999 20.3076C9.71222 20.3076 9.92015 20.3673 10.1 20.48C10.676 20.8185 11.3319 20.997 12 20.997C12.6681 20.997 13.324 20.8185 13.9 20.48C14.0798 20.3673 14.2878 20.3076 14.5 20.3076C14.7122 20.3076 14.9202 20.3673 15.1 20.48C15.6751 20.8209 16.3314 21.0006 17 21C17.2652 21 17.5196 20.8947 17.7071 20.7071C17.8946 20.5196 18 20.2652 18 20C18 19.7348 17.8946 19.4805 17.7071 19.2929C17.5196 19.1054 17.2652 19 17 19ZM18.42 7.21003C17.8083 5.80584 16.7529 4.64103 15.4157 3.89419C14.0785 3.14735 12.5332 2.8597 11.0169 3.07536C9.50049 3.29101 8.09669 3.99806 7.02071 5.08809C5.94472 6.17813 5.25595 7.59098 5.05999 9.11003C4.1874 9.321 3.41115 9.81936 2.85612 10.5249C2.30108 11.2305 1.99954 12.1023 1.99999 13C1.9982 13.5665 2.11674 14.1268 2.34774 14.644C2.57875 15.1611 2.91696 15.6234 3.33999 16C3.52229 16.1608 3.75692 16.2497 3.99999 16.25C4.14274 16.2486 4.28353 16.2166 4.4129 16.1563C4.54226 16.0959 4.6572 16.0085 4.74999 15.9C4.92479 15.701 5.01349 15.4408 4.99662 15.1764C4.97974 14.9121 4.85868 14.6652 4.65999 14.49C4.44797 14.3048 4.27903 14.0755 4.16501 13.8181C4.051 13.5607 3.99468 13.2815 3.99999 13C3.99999 12.4696 4.2107 11.9609 4.58578 11.5858C4.96085 11.2107 5.46956 11 5.99999 11C6.26521 11 6.51956 10.8947 6.7071 10.7071C6.89463 10.5196 6.99999 10.2652 6.99999 10C7.00254 8.81731 7.42428 7.67379 8.19026 6.77262C8.95624 5.87145 10.0169 5.27098 11.1837 5.07791C12.3506 4.88483 13.5481 5.11164 14.5636 5.71804C15.579 6.32444 16.3466 7.27117 16.73 8.39003C16.7887 8.56001 16.8921 8.71102 17.0293 8.82717C17.1666 8.94332 17.3326 9.02031 17.51 9.05003C18.2058 9.17007 18.837 9.53172 19.2925 10.0713C19.748 10.6109 19.9985 11.2939 20 12C20.0133 12.736 19.7491 13.45 19.26 14C19.1565 14.0941 19.0739 14.2088 19.0175 14.3367C18.9611 14.4647 18.9322 14.603 18.9326 14.7429C18.933 14.8827 18.9627 15.0209 19.0198 15.1485C19.0769 15.2762 19.1602 15.3904 19.2642 15.4839C19.3682 15.5773 19.4906 15.6479 19.6236 15.6911C19.7566 15.7343 19.8972 15.7492 20.0362 15.7347C20.1753 15.7202 20.3098 15.6767 20.431 15.607C20.5522 15.5373 20.6575 15.4429 20.74 15.33C21.5618 14.4168 22.0114 13.2286 22 12C21.9991 10.9225 21.6501 9.87399 21.005 9.01085C20.3599 8.1477 19.4532 7.51607 18.42 7.21003Z" fill={props.color}/>
</svg>
  );
}