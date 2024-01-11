import React from 'react';
import { IconProps } from "../styles";

export function Boat(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M3.62003 17.28C3.71816 17.5267 3.91025 17.7242 4.15405 17.8292C4.39785 17.9343 4.67338 17.9381 4.92003 17.84C5.16668 17.7419 5.36425 17.5498 5.46927 17.306C5.57429 17.0622 5.57816 16.7867 5.48003 16.54L4.36003 13.72L11 12.25V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4805 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V12.25L19.64 13.72L18.52 16.54C18.4713 16.6621 18.4472 16.7926 18.449 16.9241C18.4507 17.0556 18.4784 17.1854 18.5304 17.3061C18.5825 17.4269 18.6578 17.5362 18.7521 17.6278C18.8464 17.7194 18.9578 17.7915 19.08 17.84C19.1978 17.8866 19.3234 17.9103 19.45 17.91C19.6503 17.9102 19.846 17.8502 20.0118 17.7379C20.1777 17.6256 20.3059 17.4661 20.38 17.28L21.93 13.37C21.9832 13.2348 22.0063 13.0896 21.9977 12.9445C21.9891 12.7994 21.9489 12.658 21.88 12.53C21.8132 12.4025 21.7196 12.2909 21.6057 12.2029C21.4918 12.1149 21.3603 12.0525 21.22 12.02L18 11.31V7C18 6.73478 17.8947 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6H15V3C15 2.73478 14.8947 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2H10C9.73482 2 9.48046 2.10536 9.29292 2.29289C9.10539 2.48043 9.00003 2.73478 9.00003 3V6H7.00003C6.73481 6 6.48046 6.10536 6.29292 6.29289C6.10539 6.48043 6.00003 6.73478 6.00003 7V11.31L2.78003 12C2.63979 12.0325 2.50823 12.0949 2.39432 12.1829C2.28041 12.2709 2.18685 12.3825 2.12003 12.51C2.05116 12.638 2.01101 12.7794 2.00237 12.9245C1.99374 13.0696 2.01683 13.2148 2.07003 13.35L3.62003 17.28ZM11 4H13V6H11V4ZM8.00003 8H16V10.86L12.22 10H12.12H12H11.88H11.78L8.00003 10.86V8ZM20.71 19.28C20.3592 19.3875 20.0232 19.5387 19.71 19.73C19.3915 19.9163 19.0291 20.0145 18.66 20.0145C18.291 20.0145 17.9286 19.9163 17.61 19.73C16.9173 19.3392 16.1354 19.1339 15.34 19.1339C14.5447 19.1339 13.7628 19.3392 13.07 19.73C12.7471 19.9141 12.3818 20.011 12.01 20.011C11.6383 20.011 11.273 19.9141 10.95 19.73C10.2567 19.3411 9.47502 19.1368 8.68003 19.1368C7.88504 19.1368 7.10339 19.3411 6.41003 19.73C6.09146 19.9163 5.72907 20.0145 5.36003 20.0145C4.99099 20.0145 4.6286 19.9163 4.31003 19.73C3.99687 19.5387 3.6609 19.3875 3.31003 19.28C3.17697 19.2327 3.0354 19.2141 2.89464 19.2255C2.75388 19.2368 2.61712 19.2778 2.49337 19.3459C2.36961 19.4139 2.26166 19.5073 2.17663 19.6201C2.0916 19.7328 2.03141 19.8623 2.00003 20C1.92538 20.2533 1.95392 20.5258 2.07944 20.7581C2.20496 20.9904 2.41727 21.1636 2.67003 21.24C2.87139 21.2946 3.0635 21.3788 3.24003 21.49C3.84674 21.846 4.5366 22.0357 5.24003 22.04C5.97063 22.0401 6.68826 21.8469 7.32003 21.48C7.71201 21.2638 8.15237 21.1504 8.60003 21.1504C9.04769 21.1504 9.48806 21.2638 9.88003 21.48C10.5073 21.8387 11.2174 22.0274 11.94 22.0274C12.6626 22.0274 13.3727 21.8387 14 21.48C14.392 21.2638 14.8324 21.1504 15.28 21.1504C15.7277 21.1504 16.1681 21.2638 16.56 21.48C17.1798 21.8499 17.8882 22.0453 18.61 22.0453C19.3318 22.0453 20.0402 21.8499 20.66 21.48C20.8366 21.3688 21.0287 21.2846 21.23 21.23C21.3631 21.2031 21.4893 21.1493 21.601 21.0721C21.7126 20.9948 21.8073 20.8956 21.8794 20.7805C21.9514 20.6654 21.9993 20.5368 22.02 20.4027C22.0408 20.2685 22.034 20.1315 22 20C21.9683 19.8647 21.9086 19.7374 21.8249 19.6265C21.7412 19.5155 21.6353 19.4232 21.5139 19.3554C21.3925 19.2877 21.2583 19.246 21.1199 19.233C20.9815 19.22 20.8419 19.236 20.71 19.28Z" fill={props.color}/>
</svg>
  );
}