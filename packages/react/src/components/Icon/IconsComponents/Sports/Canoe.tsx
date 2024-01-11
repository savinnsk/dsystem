import React from 'react';
import { IconProps } from "../styles";

export function Canoe(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21.12 16.88C20.6818 16.4453 20.1201 16.1563 19.5117 16.0525C18.9032 15.9487 18.2775 16.0351 17.72 16.3L16.57 15.16C18.9261 12.6176 20.7035 9.59491 21.78 6.29999C21.9843 5.73076 22.0225 5.11518 21.8903 4.52503C21.758 3.93489 21.4608 3.39449 21.0331 2.96685C20.6055 2.5392 20.0651 2.24193 19.4749 2.1097C18.8848 1.97747 18.2692 2.01572 17.7 2.21999C14.4051 3.29646 11.3824 5.07388 8.83999 7.42999L7.69999 6.27999C7.93682 5.78309 8.03237 5.2306 7.97618 4.68301C7.91999 4.13542 7.71422 3.61385 7.3814 3.1754C7.04858 2.73695 6.60154 2.39852 6.08923 2.19717C5.57692 1.99581 5.01908 1.9393 4.47679 2.0338C3.93451 2.12831 3.42867 2.3702 3.01468 2.73298C2.60068 3.09577 2.29448 3.56547 2.1296 4.09066C1.96471 4.61584 1.94751 5.17627 2.07986 5.71058C2.21222 6.2449 2.48903 6.73249 2.87999 7.11999C3.44206 7.68276 4.20461 7.99929 4.99999 7.99999C5.44359 7.99586 5.88075 7.8934 6.27999 7.69999L7.42999 8.83999C5.07388 11.3824 3.29646 14.4051 2.21999 17.7C2.0325 18.2684 2.00613 18.8777 2.14381 19.4602C2.28149 20.0427 2.57784 20.5757 2.99999 21C3.28586 21.3048 3.62916 21.55 4.01015 21.7216C4.39114 21.8933 4.8023 21.9879 5.21999 22C5.58637 21.9965 5.95026 21.9393 6.29999 21.83C9.59491 20.7535 12.6175 18.9761 15.16 16.62L16.3 17.77C16.0632 18.2669 15.9676 18.8194 16.0238 19.367C16.08 19.9146 16.2858 20.4361 16.6186 20.8746C16.9514 21.313 17.3984 21.6515 17.9107 21.8528C18.4231 22.0542 18.9809 22.1107 19.5232 22.0162C20.0655 21.9217 20.5713 21.6798 20.9853 21.317C21.3993 20.9542 21.7055 20.4845 21.8704 19.9593C22.0353 19.4341 22.0525 18.8737 21.9201 18.3394C21.7878 17.8051 21.511 17.3175 21.12 16.93V16.88ZM5.70999 5.69999C5.52301 5.8883 5.26889 5.99461 5.00352 5.99555C4.73816 5.99649 4.48329 5.89197 4.29499 5.70499C4.10668 5.51802 4.00037 5.26389 3.99943 4.99853C3.99849 4.73317 4.10301 4.4783 4.28999 4.28999C4.47697 4.10169 4.73109 3.99538 4.99645 3.99444C5.26182 3.9935 5.51668 4.09802 5.70499 4.28499C5.89329 4.47197 5.99961 4.72609 6.00054 4.99146C6.00148 5.25682 5.89697 5.51169 5.70999 5.69999ZM18.31 4.12999C18.4618 4.08 18.6202 4.05304 18.78 4.04999C18.934 4.04874 19.0867 4.07815 19.2292 4.13653C19.3717 4.1949 19.5011 4.28107 19.61 4.38999C19.773 4.55922 19.884 4.77159 19.9301 5.00197C19.9762 5.23235 19.9553 5.4711 19.87 5.68999C19.3417 7.31379 18.6269 8.87085 17.74 10.33L13.67 6.25999C15.1291 5.37304 16.6862 4.65827 18.31 4.12999ZM5.68999 19.87C5.47192 19.9573 5.23302 19.9787 5.00292 19.9314C4.77281 19.8842 4.56162 19.7706 4.39553 19.6045C4.22943 19.4384 4.11573 19.2272 4.06853 18.9971C4.02133 18.767 4.0427 18.5281 4.12999 18.31C4.65827 16.6862 5.37304 15.1291 6.25999 13.67L10.33 17.74C8.87085 18.6269 7.31378 19.3417 5.68999 19.87ZM12 16.59L7.40999 12C7.85562 11.3952 8.33296 10.8144 8.83999 10.26L13.75 15.17C13.1921 15.6739 12.608 16.1479 12 16.59ZM15.15 13.75L10.25 8.83999C10.8076 8.33268 11.3917 7.85534 12 7.40999L16.6 12.01C16.1511 12.6151 15.6704 13.1959 15.16 13.75H15.15ZM19.7 19.75C19.6074 19.8432 19.4974 19.9173 19.3762 19.968C19.2549 20.0187 19.1249 20.0451 18.9935 20.0456C18.8621 20.046 18.7319 20.0206 18.6104 19.9707C18.4888 19.9209 18.3782 19.8476 18.285 19.755C18.1917 19.6624 18.1177 19.5524 18.0669 19.4312C18.0162 19.3099 17.9899 19.1799 17.9894 19.0485C17.989 18.9171 18.0144 18.7869 18.0642 18.6654C18.1141 18.5438 18.1874 18.4332 18.28 18.34C18.4674 18.1537 18.7208 18.0492 18.985 18.0492C19.2492 18.0492 19.5026 18.1537 19.69 18.34C19.8671 18.5229 19.9678 18.7665 19.9715 19.021C19.9752 19.2756 19.8817 19.522 19.71 19.71L19.7 19.75Z" fill={props.color}/>
</svg>
  );
}