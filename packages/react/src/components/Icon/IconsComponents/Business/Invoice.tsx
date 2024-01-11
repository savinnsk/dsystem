import React from 'react';
import { IconProps } from "../styles";

export function Invoice(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M9.00001 11.9999H7.00001C6.73479 11.9999 6.48044 12.1053 6.2929 12.2928C6.10537 12.4804 6.00001 12.7347 6.00001 12.9999C6.00001 13.2652 6.10537 13.5195 6.2929 13.7071C6.48044 13.8946 6.73479 13.9999 7.00001 13.9999H9.00001C9.26522 13.9999 9.51958 13.8946 9.70711 13.7071C9.89465 13.5195 10 13.2652 10 12.9999C10 12.7347 9.89465 12.4804 9.70711 12.2928C9.51958 12.1053 9.26522 11.9999 9.00001 11.9999ZM8.00001 9.99995H12C12.2652 9.99995 12.5196 9.89459 12.7071 9.70705C12.8947 9.51952 13 9.26516 13 8.99995C13 8.73473 12.8947 8.48038 12.7071 8.29284C12.5196 8.1053 12.2652 7.99995 12 7.99995H8.00001C7.73479 7.99995 7.48044 8.1053 7.2929 8.29284C7.10537 8.48038 7.00001 8.73473 7.00001 8.99995C7.00001 9.26516 7.10537 9.51952 7.2929 9.70705C7.48044 9.89459 7.73479 9.99995 8.00001 9.99995ZM9.00001 15.9999H7.00001C6.73479 15.9999 6.48044 16.1053 6.2929 16.2928C6.10537 16.4804 6.00001 16.7347 6.00001 16.9999C6.00001 17.2652 6.10537 17.5195 6.2929 17.7071C6.48044 17.8946 6.73479 17.9999 7.00001 17.9999H9.00001C9.26522 17.9999 9.51958 17.8946 9.70711 17.7071C9.89465 17.5195 10 17.2652 10 16.9999C10 16.7347 9.89465 16.4804 9.70711 16.2928C9.51958 16.1053 9.26522 15.9999 9.00001 15.9999ZM21 11.9999H18V2.99995C18.0007 2.82374 17.9548 2.65047 17.867 2.49769C17.7792 2.34491 17.6526 2.21805 17.5 2.12995C17.348 2.04218 17.1755 1.99597 17 1.99597C16.8245 1.99597 16.652 2.04218 16.5 2.12995L13.5 3.84995L10.5 2.12995C10.348 2.04218 10.1755 1.99597 10 1.99597C9.82447 1.99597 9.65203 2.04218 9.50001 2.12995L6.50001 3.84995L3.50001 2.12995C3.34799 2.04218 3.17554 1.99597 3.00001 1.99597C2.82447 1.99597 2.65203 2.04218 2.50001 2.12995C2.3474 2.21805 2.22079 2.34491 2.13299 2.49769C2.04518 2.65047 1.99931 2.82374 2.00001 2.99995V18.9999C2.00001 19.7956 2.31608 20.5587 2.87869 21.1213C3.4413 21.6839 4.20436 21.9999 5.00001 21.9999H19C19.7957 21.9999 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 18.9999V12.9999C22 12.7347 21.8947 12.4804 21.7071 12.2928C21.5196 12.1053 21.2652 11.9999 21 11.9999ZM5.00001 19.9999C4.73479 19.9999 4.48044 19.8946 4.2929 19.7071C4.10536 19.5195 4.00001 19.2652 4.00001 18.9999V4.72995L6.00001 5.86995C6.15435 5.95056 6.32589 5.99266 6.50001 5.99266C6.67413 5.99266 6.84567 5.95056 7.00001 5.86995L10 4.14995L13 5.86995C13.1543 5.95056 13.3259 5.99266 13.5 5.99266C13.6741 5.99266 13.8457 5.95056 14 5.86995L16 4.72995V18.9999C16.0027 19.3411 16.0636 19.6793 16.18 19.9999H5.00001ZM20 18.9999C20 19.2652 19.8947 19.5195 19.7071 19.7071C19.5196 19.8946 19.2652 19.9999 19 19.9999C18.7348 19.9999 18.4804 19.8946 18.2929 19.7071C18.1054 19.5195 18 19.2652 18 18.9999V13.9999H20V18.9999ZM13.56 16.1699C13.5043 16.1321 13.4437 16.1018 13.38 16.0799C13.3205 16.0495 13.2562 16.0292 13.19 16.0199C13.0294 15.9878 12.8633 15.9956 12.7063 16.0427C12.5494 16.0897 12.4064 16.1747 12.29 16.2899C12.1073 16.4816 12.0037 16.7352 12 16.9999C11.9984 17.13 12.0222 17.259 12.07 17.3799C12.1244 17.5015 12.1987 17.613 12.29 17.7099C12.3872 17.7983 12.4988 17.8693 12.62 17.9199C12.7397 17.9729 12.8691 18.0002 13 18.0002C13.1309 18.0002 13.2603 17.9729 13.38 17.9199C13.5012 17.8693 13.6128 17.7983 13.71 17.7099C13.8027 17.6165 13.876 17.5057 13.9258 17.3839C13.9755 17.262 14.0008 17.1316 14 16.9999C13.9963 16.7352 13.8927 16.4816 13.71 16.2899C13.6625 16.2469 13.6124 16.2069 13.56 16.1699ZM13.7 12.2899C13.5832 12.1762 13.4404 12.0928 13.2841 12.0469C13.1277 12.0009 12.9624 11.994 12.8027 12.0265C12.643 12.059 12.4937 12.1301 12.3677 12.2335C12.2418 12.337 12.143 12.4696 12.08 12.6199C12.0178 12.7714 11.9937 12.9359 12.0099 13.0989C12.0261 13.2619 12.0821 13.4184 12.1729 13.5547C12.2638 13.6909 12.3867 13.8028 12.5309 13.8805C12.6751 13.9581 12.8362 13.9991 13 13.9999C13.2652 13.9999 13.5196 13.8946 13.7071 13.7071C13.8947 13.5195 14 13.2652 14 12.9999C13.9984 12.8693 13.9712 12.7402 13.92 12.6199C13.8718 12.4951 13.7967 12.3824 13.7 12.2899Z" fill={props.color}/>
</svg>
  );
}