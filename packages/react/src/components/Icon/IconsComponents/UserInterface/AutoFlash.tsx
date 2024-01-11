import React from 'react';
import { IconProps } from "../styles";

export function AutoFlash(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M17.87 8.6001C17.7955 8.42882 17.6745 8.28183 17.5208 8.17578C17.367 8.06974 17.1866 8.00888 17 8.0001H12.42L13.69 3.2601C13.7305 3.11177 13.7362 2.95612 13.7067 2.80523C13.6772 2.65434 13.6134 2.51229 13.52 2.3901C13.4259 2.26774 13.3046 2.16886 13.1658 2.10119C13.027 2.03353 12.8745 1.99893 12.72 2.0001H5.72005C5.49428 1.99236 5.27255 2.0613 5.09097 2.19567C4.90938 2.33004 4.77865 2.52194 4.72005 2.7401L2.04005 12.7401C1.99927 12.8912 1.99451 13.0497 2.02615 13.2029C2.05779 13.3561 2.12494 13.4998 2.2222 13.6224C2.31947 13.7449 2.44414 13.8429 2.58618 13.9085C2.72822 13.9741 2.88368 14.0055 3.04005 14.0001H6.89005L5.08005 20.7401C5.02074 20.9574 5.03657 21.1884 5.12495 21.3957C5.21333 21.6029 5.3691 21.7742 5.56701 21.8818C5.76491 21.9895 5.99337 22.0271 6.21535 21.9887C6.43733 21.9503 6.63983 21.838 6.79005 21.6701L17.69 9.6701C17.8198 9.52798 17.9059 9.35143 17.9378 9.16163C17.9697 8.97184 17.9462 8.77686 17.87 8.6001ZM8.08005 17.2801L9.16005 13.2801C9.20516 13.1296 9.21419 12.9706 9.18639 12.816C9.15859 12.6614 9.09475 12.5155 9.00005 12.3901C8.90484 12.2664 8.782 12.1667 8.64134 12.0989C8.50069 12.0312 8.34613 11.9974 8.19005 12.0001H4.35005L6.49005 4.0001H11.42L10.15 8.7401C10.1093 8.89115 10.1045 9.04967 10.1362 9.2029C10.1678 9.35613 10.2349 9.4998 10.3322 9.62235C10.4295 9.74491 10.5541 9.84293 10.6962 9.90854C10.8382 9.97414 10.9937 10.0055 11.15 10.0001H14.72L8.08005 17.2801ZM19 13.0001H18C17.2044 13.0001 16.4413 13.3162 15.8787 13.8788C15.3161 14.4414 15 15.2044 15 16.0001V21.0001C15 21.2653 15.1054 21.5197 15.2929 21.7072C15.4805 21.8947 15.7348 22.0001 16 22.0001C16.2653 22.0001 16.5196 21.8947 16.7072 21.7072C16.8947 21.5197 17 21.2653 17 21.0001V19.0001H20V21.0001C20 21.2653 20.1054 21.5197 20.2929 21.7072C20.4805 21.8947 20.7348 22.0001 21 22.0001C21.2653 22.0001 21.5196 21.8947 21.7072 21.7072C21.8947 21.5197 22 21.2653 22 21.0001V16.0001C22 15.2044 21.684 14.4414 21.1214 13.8788C20.5588 13.3162 19.7957 13.0001 19 13.0001ZM20 17.0001H17V16.0001C17 15.7349 17.1054 15.4805 17.2929 15.293C17.4805 15.1055 17.7348 15.0001 18 15.0001H19C19.2653 15.0001 19.5196 15.1055 19.7072 15.293C19.8947 15.4805 20 15.7349 20 16.0001V17.0001Z" fill={props.color}/>
</svg>
  );
}