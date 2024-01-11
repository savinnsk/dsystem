import React from 'react';
import { IconProps } from "../styles";

export function OpenBook(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21.17 2.06C20.4532 1.93653 19.7274 1.87298 19 1.87C16.5184 1.86796 14.0885 2.57957 12 3.92C9.90615 2.59717 7.47665 1.90303 5 1.92C4.27265 1.92298 3.5468 1.98653 2.83 2.11C2.59521 2.15048 2.38258 2.27346 2.23041 2.45679C2.07825 2.64013 1.99654 2.87177 2 3.11V15.11C1.99786 15.2569 2.02813 15.4025 2.08865 15.5364C2.14917 15.6703 2.23847 15.7893 2.35017 15.8847C2.46188 15.9802 2.59326 16.0499 2.73496 16.0888C2.87666 16.1278 3.02519 16.135 3.17 16.11C4.60302 15.8619 6.0712 15.9031 7.48807 16.2311C8.90493 16.5591 10.2418 17.1674 11.42 18.02L11.54 18.09H11.65C11.7609 18.1362 11.8799 18.16 12 18.16C12.1201 18.16 12.2391 18.1362 12.35 18.09H12.46L12.58 18.02C13.75 17.1483 15.083 16.5203 16.5001 16.1734C17.9173 15.8264 19.3897 15.7674 20.83 16C20.9748 16.025 21.1233 16.0178 21.265 15.9788C21.4067 15.9399 21.5381 15.8702 21.6498 15.7747C21.7615 15.6793 21.8508 15.5603 21.9114 15.4264C21.9719 15.2925 22.0021 15.1469 22 15V3C21.9896 2.77215 21.9016 2.55471 21.7506 2.38374C21.5997 2.21276 21.3948 2.09854 21.17 2.06ZM11 15.35C9.14988 14.3767 7.09052 13.8687 5 13.87C4.67 13.87 4.34 13.87 4 13.87V3.87C4.33306 3.8508 4.66694 3.8508 5 3.87C7.13339 3.86764 9.22022 4.49369 11 5.67V15.35ZM20 13.91C19.66 13.91 19.33 13.91 19 13.91C16.9095 13.9087 14.8501 14.4167 13 15.39V5.67C14.7798 4.49369 16.8666 3.86764 19 3.87C19.3331 3.8508 19.6669 3.8508 20 3.87V13.91ZM21.17 18.06C20.4532 17.9365 19.7274 17.873 19 17.87C16.5184 17.868 14.0885 18.5796 12 19.92C9.91152 18.5796 7.48164 17.868 5 17.87C4.27265 17.873 3.5468 17.9365 2.83 18.06C2.69983 18.0807 2.57502 18.1268 2.46276 18.1959C2.3505 18.265 2.253 18.3555 2.17587 18.4624C2.09873 18.5693 2.04349 18.6903 2.0133 18.8186C1.98312 18.9469 1.9786 19.0799 2 19.21C2.05082 19.4697 2.20249 19.6986 2.42179 19.8467C2.64109 19.9948 2.91014 20.0499 3.17 20C4.60302 19.7519 6.0712 19.7931 7.48807 20.1211C8.90493 20.4491 10.2418 21.0574 11.42 21.91C11.5894 22.0306 11.7921 22.0954 12 22.0954C12.2079 22.0954 12.4106 22.0306 12.58 21.91C13.7582 21.0574 15.0951 20.4491 16.5119 20.1211C17.9288 19.7931 19.397 19.7519 20.83 20C21.0899 20.0499 21.3589 19.9948 21.5782 19.8467C21.7975 19.6986 21.9492 19.4697 22 19.21C22.0214 19.0799 22.0169 18.9469 21.9867 18.8186C21.9565 18.6903 21.9013 18.5693 21.8241 18.4624C21.747 18.3555 21.6495 18.265 21.5372 18.1959C21.425 18.1268 21.3002 18.0807 21.17 18.06Z" fill={props.color}/>
</svg>
  );
}