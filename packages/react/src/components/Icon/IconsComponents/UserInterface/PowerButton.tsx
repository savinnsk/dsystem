import React from 'react';
import { IconProps } from "../styles";

export function PowerButton(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M10.21 6.2099L11 5.4099V9.9999C11 10.2651 11.1053 10.5195 11.2929 10.707C11.4804 10.8945 11.7348 10.9999 12 10.9999C12.2652 10.9999 12.5196 10.8945 12.7071 10.707C12.8946 10.5195 13 10.2651 13 9.9999V5.4099L13.79 6.2099C13.8829 6.30363 13.9935 6.37802 14.1154 6.42879C14.2373 6.47956 14.368 6.50569 14.5 6.50569C14.632 6.50569 14.7627 6.47956 14.8846 6.42879C15.0064 6.37802 15.117 6.30363 15.21 6.2099C15.3037 6.11693 15.3781 6.00633 15.4289 5.88447C15.4796 5.76261 15.5058 5.63191 15.5058 5.4999C15.5058 5.36788 15.4796 5.23718 15.4289 5.11532C15.3781 4.99346 15.3037 4.88286 15.21 4.7899L12.71 2.2899C12.6149 2.19886 12.5027 2.12749 12.38 2.0799C12.1365 1.97988 11.8634 1.97988 11.62 2.0799C11.4972 2.12749 11.3851 2.19886 11.29 2.2899L8.78998 4.7899C8.60168 4.9782 8.49589 5.23359 8.49589 5.4999C8.49589 5.7662 8.60168 6.02159 8.78998 6.2099C8.97829 6.3982 9.23368 6.50399 9.49998 6.50399C9.76628 6.50399 10.0217 6.3982 10.21 6.2099ZM18 7.5599C17.9054 7.46534 17.7932 7.39034 17.6696 7.33917C17.5461 7.288 17.4137 7.26166 17.28 7.26166C17.1463 7.26166 17.0139 7.288 16.8903 7.33917C16.7668 7.39034 16.6545 7.46534 16.56 7.5599C16.4654 7.65445 16.3904 7.7667 16.3393 7.89024C16.2881 8.01377 16.2617 8.14618 16.2617 8.2799C16.2617 8.41361 16.2881 8.54602 16.3393 8.66956C16.3904 8.7931 16.4654 8.90534 16.56 8.9999C17.4623 9.90185 18.0768 11.0511 18.3259 12.3024C18.5749 13.5536 18.4473 14.8506 17.9592 16.0293C17.4711 17.2081 16.6444 18.2155 15.5837 18.9244C14.5229 19.6332 13.2758 20.0116 12 20.0116C10.7242 20.0116 9.47706 19.6332 8.41631 18.9244C7.35556 18.2155 6.52885 17.2081 6.04073 16.0293C5.55262 14.8506 5.42502 13.5536 5.67409 12.3024C5.92316 11.0511 6.5377 9.90185 7.43998 8.9999C7.53453 8.90534 7.60954 8.7931 7.66071 8.66956C7.71188 8.54602 7.73822 8.41361 7.73822 8.2799C7.73822 8.14618 7.71188 8.01377 7.66071 7.89024C7.60954 7.7667 7.53453 7.65445 7.43998 7.5599C7.34543 7.46534 7.23318 7.39034 7.10964 7.33917C6.98611 7.288 6.8537 7.26166 6.71998 7.26166C6.58627 7.26166 6.45386 7.288 6.33032 7.33917C6.20678 7.39034 6.09453 7.46534 5.99998 7.5599C4.8219 8.74506 4.02119 10.2526 3.69885 11.8923C3.37652 13.5319 3.54701 15.2304 4.18881 16.7733C4.83062 18.3162 5.91498 19.6345 7.30512 20.5618C8.69526 21.4892 10.3289 21.9841 12 21.9841C13.6711 21.9841 15.3047 21.4892 16.6948 20.5618C18.085 19.6345 19.1693 18.3162 19.8111 16.7733C20.4529 15.2304 20.6234 13.5319 20.3011 11.8923C19.9788 10.2526 19.1781 8.74506 18 7.5599Z" fill={props.color}/>
</svg>
  );
}