import React from 'react';
import { IconProps } from "../styles";

export function Panorama(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21.54 5.15995C21.3942 5.06131 21.2249 5.00289 21.0494 4.9906C20.8738 4.97831 20.698 5.01258 20.54 5.08995C17.8366 6.21891 14.9292 6.77725 12 6.72995C9.05729 6.78278 6.13568 6.22434 3.41995 5.08995C3.26185 5.01258 3.08613 4.97831 2.91055 4.9906C2.73496 5.00289 2.56573 5.06131 2.41995 5.15995C2.28652 5.25488 2.17844 5.38112 2.10521 5.52758C2.03197 5.67405 1.99583 5.83625 1.99995 5.99995V18C2.00023 18.1673 2.04249 18.3318 2.12285 18.4786C2.20322 18.6254 2.31912 18.7496 2.45995 18.84C2.60573 18.9386 2.77496 18.997 2.95055 19.0093C3.12613 19.0216 3.30185 18.9873 3.45995 18.91C6.1633 17.781 9.07072 17.2227 12 17.27C14.9426 17.2171 17.8642 17.7756 20.58 18.91C20.7123 18.9683 20.8553 18.9989 21 19C21.1916 18.9995 21.379 18.9439 21.54 18.84C21.6808 18.7496 21.7967 18.6254 21.877 18.4786C21.9574 18.3318 21.9997 18.1673 22 18V5.99995C21.9997 5.83263 21.9574 5.66806 21.877 5.52131C21.7967 5.37455 21.6808 5.25031 21.54 5.15995ZM20 16.52C17.4199 15.6673 14.7171 15.245 12 15.27C9.28277 15.245 6.58 15.6673 3.99995 16.52V7.51995C6.58 8.3726 9.28277 8.79491 12 8.76995C14.7171 8.79491 17.4199 8.3726 20 7.51995V16.52Z" fill={props.color}/>
</svg>
  );
}