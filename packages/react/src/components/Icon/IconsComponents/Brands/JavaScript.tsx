import React from 'react';
import { IconProps } from "../styles";

export function JavaScript(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M14.478 14.8829C13.7261 14.9562 12.9686 14.8183 12.2907 14.4846C12.1372 14.3618 12.0105 14.2088 11.9184 14.035C11.8263 13.8613 11.7708 13.6705 11.7553 13.4745C11.755 13.4451 11.7488 13.4161 11.7372 13.3892C11.7257 13.3622 11.7088 13.3379 11.6878 13.3174C11.6667 13.297 11.6418 13.281 11.6145 13.2703C11.5871 13.2596 11.558 13.2544 11.5287 13.255C11.2121 13.2512 10.8955 13.252 10.579 13.2546C10.5237 13.249 10.4684 13.2654 10.4251 13.3002C10.3817 13.3351 10.3539 13.3856 10.3476 13.4409C10.3296 13.7848 10.3877 14.1285 10.5179 14.4474C10.6481 14.7662 10.8471 15.0524 11.1007 15.2854C11.7409 15.785 12.5182 16.0774 13.3289 16.1236C14.1737 16.2216 15.0286 16.1853 15.862 16.0161C16.502 15.8967 17.0887 15.5805 17.5403 15.1117C17.7899 14.8039 17.9572 14.4376 18.0265 14.0474C18.0958 13.6572 18.0647 13.2558 17.9363 12.8809C17.8284 12.6166 17.6614 12.3805 17.4481 12.1908C17.2348 12.0011 16.9809 11.8627 16.7059 11.7863C15.4251 11.3369 14.0415 11.3709 12.7359 11.0294C12.5092 10.9581 12.2322 10.8806 12.1312 10.6407C12.0728 10.4718 12.0688 10.2888 12.1198 10.1176C12.1708 9.94631 12.2741 9.79533 12.4154 9.68587C12.8253 9.45158 13.2922 9.33535 13.7641 9.35006C14.4046 9.28976 15.0504 9.38215 15.6483 9.61965C15.8279 9.72528 15.9824 9.86875 16.101 10.0401C16.2196 10.2114 16.2994 10.4065 16.335 10.6118C16.3368 10.6724 16.3611 10.7302 16.4032 10.7738C16.4453 10.8174 16.5022 10.8437 16.5626 10.8475C16.877 10.8539 17.1914 10.8492 17.5058 10.8496C17.5603 10.8562 17.6153 10.8428 17.6607 10.812C17.7062 10.7811 17.739 10.735 17.7531 10.6819C17.7559 10.2579 17.6479 9.84056 17.4397 9.47116C17.2316 9.10177 16.9305 8.79316 16.5664 8.57591C15.5614 8.1121 14.4459 7.94141 13.3482 8.08348V8.0834C12.544 8.11637 11.7756 8.42512 11.1721 8.95778C10.895 9.25639 10.7074 9.62681 10.6306 10.0268C10.5538 10.4269 10.5909 10.8404 10.7377 11.2204C10.8519 11.475 11.02 11.7017 11.2304 11.885C11.4407 12.0683 11.6883 12.2038 11.9561 12.2822C13.2326 12.7433 14.6316 12.5953 15.9205 13.003C16.1717 13.0882 16.4641 13.2185 16.5411 13.4981C16.5824 13.6656 16.5793 13.841 16.532 14.007C16.4847 14.1729 16.3949 14.3237 16.2714 14.4442C15.7354 14.7772 15.1072 14.9309 14.478 14.8829ZM20.2969 6.43752C17.8047 5.02819 15.3118 3.62013 12.8185 2.21334C12.5683 2.07345 12.2864 2 11.9998 2C11.7132 2 11.4313 2.07345 11.1811 2.21334C8.69744 3.61588 6.21362 5.01834 3.72968 6.42074C3.48803 6.55245 3.28603 6.74642 3.14462 6.98252C3.00321 7.21862 2.92755 7.48825 2.92548 7.76345V16.2377C2.92945 16.5179 3.00919 16.7918 3.15623 17.0304C3.30328 17.2689 3.51214 17.4632 3.76068 17.5927C4.47419 17.9811 5.16742 18.409 5.89386 18.7715C6.31314 18.9957 6.77883 19.1192 7.25409 19.1322C7.72934 19.1453 8.20112 19.0476 8.63208 18.8468C8.95455 18.6448 9.21694 18.36 9.39191 18.0221C9.56688 17.6842 9.64803 17.3056 9.6269 16.9256C9.63245 14.129 9.62775 11.3321 9.62903 8.53538C9.63389 8.5048 9.63225 8.47354 9.62419 8.44365C9.61614 8.41375 9.60186 8.38589 9.58229 8.3619C9.56273 8.33791 9.53831 8.31832 9.51064 8.30441C9.48298 8.29051 9.45269 8.28261 9.42176 8.28123C9.10437 8.2761 8.7865 8.27823 8.46912 8.28038C8.43973 8.27774 8.41012 8.28135 8.38222 8.29096C8.35432 8.30057 8.32877 8.31597 8.30724 8.33614C8.28572 8.35632 8.26869 8.38082 8.2573 8.40803C8.2459 8.43525 8.24039 8.46457 8.24112 8.49406C8.23685 11.2728 8.24198 14.0524 8.23856 16.8315C8.23928 17.0234 8.18133 17.2108 8.07248 17.3688C7.96363 17.5267 7.80908 17.6476 7.62956 17.7153C7.42283 17.7764 7.20555 17.7932 6.99189 17.7646C6.77823 17.736 6.573 17.6626 6.38963 17.5493C5.72861 17.176 5.06761 16.8027 4.40663 16.4294C4.36283 16.4087 4.32644 16.375 4.30237 16.3329C4.2783 16.2908 4.26769 16.2424 4.27199 16.1941C4.27199 13.3982 4.27199 10.6025 4.27199 7.80687C4.26739 7.75249 4.2801 7.69804 4.30829 7.65131C4.33649 7.60458 4.37873 7.56796 4.42899 7.54667C6.90453 6.15242 9.37959 4.7567 11.8542 3.35952C11.8972 3.33017 11.948 3.3145 12.0001 3.31458C12.0521 3.31466 12.1029 3.33047 12.1458 3.35995C14.6213 4.75465 17.0966 6.14982 19.5718 7.54549C19.6219 7.56737 19.6638 7.60432 19.6918 7.65119C19.7198 7.69806 19.7324 7.7525 19.728 7.80691C19.7275 10.6023 19.7273 13.3979 19.7271 16.1938C19.7315 16.2422 19.7211 16.2909 19.6974 16.3334C19.6737 16.3759 19.6377 16.4103 19.5942 16.432C17.1566 17.8104 14.7176 19.1868 12.2774 20.5611C12.1608 20.6261 12.0228 20.7306 11.8865 20.6519C11.2474 20.2901 10.6161 19.9143 9.97913 19.5492C9.94656 19.5243 9.90731 19.5096 9.86639 19.5072C9.82547 19.5047 9.78475 19.5145 9.74945 19.5354C9.46889 19.6998 9.17357 19.8376 8.86737 19.947C8.72931 20.0029 8.55945 20.0188 8.46442 20.1469C8.58555 20.2787 8.7323 20.3844 8.89569 20.4575C9.64063 20.8888 10.386 21.3198 11.1317 21.7503C11.3783 21.9052 11.662 21.9912 11.9531 21.9993C12.2442 22.0074 12.5322 21.9373 12.7871 21.7963C15.2711 20.3957 17.7551 18.9944 20.2389 17.5924C20.4873 17.4627 20.696 17.2684 20.843 17.03C20.9901 16.7915 21.0701 16.5178 21.0746 16.2377V7.76345C21.0725 7.49369 20.9995 7.2292 20.8631 6.99649C20.7266 6.76379 20.5314 6.57103 20.2969 6.43752H20.2969Z" fill={props.color}/>
</svg>
  );
}