import React from 'react';
import { IconProps } from "../styles";

export function TennisBall(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.0605 2.00369 8.16389 2.57131 6.54123 3.63374C4.91858 4.69617 3.6399 6.20754 2.86094 7.98377C2.08199 9.76 1.83638 11.7244 2.15403 13.6378C2.47168 15.5511 3.33888 17.3308 4.65 18.76L4.74 18.86C5.67446 19.8465 6.80016 20.6322 8.04839 21.1692C9.29662 21.7061 10.6412 21.9831 12 21.9831C13.3588 21.9831 14.7034 21.7061 15.9516 21.1692C17.1998 20.6322 18.3256 19.8465 19.26 18.86L19.35 18.76C20.6611 17.3308 21.5283 15.5511 21.846 13.6378C22.1636 11.7244 21.918 9.76 21.1391 7.98377C20.3601 6.20754 19.0814 4.69617 17.4588 3.63374C15.8361 2.57131 13.9395 2.00369 12 2ZM5.61 16.79C4.56531 15.4116 3.99988 13.7295 3.99988 12C3.99988 10.2705 4.56531 8.58836 5.61 7.21C6.35138 7.76925 6.95283 8.49297 7.36699 9.32416C7.78114 10.1554 7.99671 11.0713 7.99671 12C7.99671 12.9287 7.78114 13.8446 7.36699 14.6758C6.95283 15.507 6.35138 16.2307 5.61 16.79ZM12 20C10.1793 20.003 8.41329 19.3779 7 18.23C7.93076 17.4802 8.68169 16.5314 9.19761 15.4533C9.71353 14.3752 9.98133 13.1952 9.98133 12C9.98133 10.8048 9.71353 9.6248 9.19761 8.5467C8.68169 7.46859 7.93076 6.51978 7 5.77C8.41502 4.62532 10.18 4.00082 12 4.00082C13.82 4.00082 15.585 4.62532 17 5.77C16.0692 6.51978 15.3183 7.46859 14.8024 8.5467C14.2865 9.6248 14.0187 10.8048 14.0187 12C14.0187 13.1952 14.2865 14.3752 14.8024 15.4533C15.3183 16.5314 16.0692 17.4802 17 18.23C15.5867 19.3779 13.8207 20.003 12 20ZM18.39 16.79C17.6486 16.2307 17.0472 15.507 16.633 14.6758C16.2189 13.8446 16.0033 12.9287 16.0033 12C16.0033 11.0713 16.2189 10.1554 16.633 9.32416C17.0472 8.49297 17.6486 7.76925 18.39 7.21C19.4347 8.58836 20.0001 10.2705 20.0001 12C20.0001 13.7295 19.4347 15.4116 18.39 16.79Z" fill={props.color}/>
</svg>
  );
}