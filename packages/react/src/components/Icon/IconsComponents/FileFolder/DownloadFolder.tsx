import React from 'react';
import { IconProps } from "../styles";

export function DownloadFolder(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M13.29 13.79L13 14.09V11.5C13 11.2348 12.8946 10.9805 12.7071 10.7929C12.5196 10.6054 12.2652 10.5 12 10.5C11.7348 10.5 11.4804 10.6054 11.2929 10.7929C11.1054 10.9805 11 11.2348 11 11.5V14.09L10.71 13.79C10.5217 13.6017 10.2663 13.4959 10 13.4959C9.7337 13.4959 9.4783 13.6017 9.29 13.79C9.1017 13.9783 8.99591 14.2337 8.99591 14.5C8.99591 14.7663 9.1017 15.0217 9.29 15.21L11.29 17.21C11.3851 17.3011 11.4972 17.3724 11.62 17.42C11.7397 17.4729 11.8691 17.5003 12 17.5003C12.1309 17.5003 12.2603 17.4729 12.38 17.42C12.5028 17.3724 12.6149 17.3011 12.71 17.21L14.71 15.21C14.8983 15.0217 15.0041 14.7663 15.0041 14.5C15.0041 14.2337 14.8983 13.9783 14.71 13.79C14.5217 13.6017 14.2663 13.4959 14 13.4959C13.7337 13.4959 13.4783 13.6017 13.29 13.79ZM19 5.50002H12.72L12.4 4.50002C12.1926 3.91325 11.8077 3.40553 11.2989 3.04718C10.7901 2.68884 10.1824 2.49762 9.56 2.50002H5C4.20435 2.50002 3.44129 2.81609 2.87868 3.3787C2.31607 3.94131 2 4.70437 2 5.50002V18.5C2 19.2957 2.31607 20.0587 2.87868 20.6213C3.44129 21.184 4.20435 21.5 5 21.5H19C19.7956 21.5 20.5587 21.184 21.1213 20.6213C21.6839 20.0587 22 19.2957 22 18.5V8.50002C22 7.70437 21.6839 6.94131 21.1213 6.3787C20.5587 5.81609 19.7956 5.50002 19 5.50002ZM20 18.5C20 18.7652 19.8946 19.0196 19.7071 19.2071C19.5196 19.3947 19.2652 19.5 19 19.5H5C4.73478 19.5 4.48043 19.3947 4.29289 19.2071C4.10536 19.0196 4 18.7652 4 18.5V5.50002C4 5.23481 4.10536 4.98045 4.29289 4.79292C4.48043 4.60538 4.73478 4.50002 5 4.50002H9.56C9.76964 4.49948 9.97416 4.56484 10.1446 4.68686C10.3151 4.80889 10.4429 4.9814 10.51 5.18002L11.05 6.82002C11.1171 7.01864 11.2449 7.19116 11.4154 7.31318C11.5858 7.4352 11.7904 7.50056 12 7.50002H19C19.2652 7.50002 19.5196 7.60538 19.7071 7.79292C19.8946 7.98045 20 8.23481 20 8.50002V18.5Z" fill={props.color}/>
</svg>
  );
}