import React from 'react';
import { IconProps } from "../styles";

export function ProtectedMail(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21.63 5.12005C21.5138 5.02607 21.3781 4.95933 21.2327 4.92472C21.0873 4.89011 20.9361 4.88851 20.79 4.92005C20.4116 5.00327 20.0199 5.0053 19.6407 4.92601C19.2614 4.84672 18.9033 4.68791 18.59 4.46005C18.4187 4.3349 18.2121 4.26746 18 4.26746C17.7879 4.26746 17.5813 4.3349 17.41 4.46005C17.0967 4.68791 16.7386 4.84672 16.3593 4.92601C15.9801 5.0053 15.5884 5.00327 15.21 4.92005C15.064 4.88869 14.9128 4.89043 14.7676 4.92514C14.6223 4.95986 14.4867 5.02666 14.3706 5.12066C14.2546 5.21465 14.161 5.33345 14.0969 5.46832C14.0328 5.60319 13.9997 5.75071 14 5.90005V9.21005C13.9984 9.92729 14.1639 10.635 14.4833 11.2772C14.8026 11.9194 15.2671 12.4785 15.84 12.9101L17.41 14.0701C17.5813 14.1952 17.7879 14.2626 18 14.2626C18.2121 14.2626 18.4187 14.1952 18.59 14.0701L20.16 12.9101C20.7329 12.4785 21.1974 11.9194 21.5167 11.2772C21.8361 10.635 22.0016 9.92729 22 9.21005V5.90005C22.0005 5.75066 21.9675 5.60305 21.9035 5.46807C21.8395 5.33309 21.746 5.21417 21.63 5.12005ZM20 9.21005C20.0055 9.6119 19.9181 10.0096 19.7446 10.3721C19.5712 10.7346 19.3163 11.0522 19 11.3001L18 12.0001L17 11.2801C16.6837 11.0322 16.4288 10.7146 16.2554 10.3521C16.0819 9.98958 15.9945 9.5919 16 9.19005V7.00005C16.6987 6.97205 17.3822 6.78751 18 6.46005C18.6178 6.78751 19.3013 6.97205 20 7.00005V9.21005ZM21 15.2101C20.7348 15.2101 20.4804 15.3154 20.2929 15.5029C20.1054 15.6905 20 15.9448 20 16.2101V19.2101C20 19.4753 19.8946 19.7296 19.7071 19.9172C19.5196 20.1047 19.2652 20.2101 19 20.2101H5C4.73478 20.2101 4.48043 20.1047 4.29289 19.9172C4.10536 19.7296 4 19.4753 4 19.2101V9.67005L9.88 15.5501C10.4396 16.1104 11.1981 16.4267 11.99 16.4301C12.3903 16.4311 12.7867 16.352 13.156 16.1974C13.5252 16.0428 13.8598 15.8159 14.14 15.5301L13.44 14.8201L12.7 14.1401C12.5131 14.3233 12.2618 14.4259 12 14.4259C11.7382 14.4259 11.4869 14.3233 11.3 14.1401L5.41 8.26005H11C11.2652 8.26005 11.5196 8.1547 11.7071 7.96716C11.8946 7.77962 12 7.52527 12 7.26005C12 6.99484 11.8946 6.74048 11.7071 6.55295C11.5196 6.36541 11.2652 6.26005 11 6.26005H5C4.20435 6.26005 3.44129 6.57612 2.87868 7.13873C2.31607 7.70134 2 8.4644 2 9.26005V19.2601C2 20.0557 2.31607 20.8188 2.87868 21.3814C3.44129 21.944 4.20435 22.2601 5 22.2601H19C19.7956 22.2601 20.5587 21.944 21.1213 21.3814C21.6839 20.8188 22 20.0557 22 19.2601V16.2601C22 15.9948 21.8946 15.7405 21.7071 15.5529C21.5196 15.3654 21.2652 15.2601 21 15.2601V15.2101Z" fill={props.color}/>
</svg>
  );
}