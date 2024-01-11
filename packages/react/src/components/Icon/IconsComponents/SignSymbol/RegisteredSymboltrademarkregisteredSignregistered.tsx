import React from 'react';
import { IconProps } from "../styles";

export function RegisteredSymbol(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM12.5 7H9.5C9.23479 7 8.98043 7.10536 8.7929 7.29289C8.60536 7.48043 8.5 7.73478 8.5 8V16C8.5 16.2652 8.60536 16.5196 8.7929 16.7071C8.98043 16.8946 9.23479 17 9.5 17C9.76522 17 10.0196 16.8946 10.2071 16.7071C10.3946 16.5196 10.5 16.2652 10.5 16V14H12.5C12.7652 14 13.0196 14.1054 13.2071 14.2929C13.3946 14.4804 13.5 14.7348 13.5 15V16C13.5 16.2652 13.6054 16.5196 13.7929 16.7071C13.9804 16.8946 14.2348 17 14.5 17C14.7652 17 15.0196 16.8946 15.2071 16.7071C15.3946 16.5196 15.5 16.2652 15.5 16V15C15.4956 14.2599 15.2178 13.5476 14.72 13C15.2178 12.4524 15.4956 11.7401 15.5 11V10C15.5 9.20435 15.1839 8.44129 14.6213 7.87868C14.0587 7.31607 13.2957 7 12.5 7ZM13.5 11C13.5 11.2652 13.3946 11.5196 13.2071 11.7071C13.0196 11.8946 12.7652 12 12.5 12H10.5V9H12.5C12.7652 9 13.0196 9.10536 13.2071 9.29289C13.3946 9.48043 13.5 9.73478 13.5 10V11Z" fill={props.color}/>
</svg>
  );
}