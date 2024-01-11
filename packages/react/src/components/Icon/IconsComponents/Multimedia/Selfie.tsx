import React from 'react';
import { IconProps } from "../styles";

export function Selfie(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M16 2H8C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V5C19 4.20435 18.6839 3.44129 18.1213 2.87868C17.5587 2.31607 16.7956 2 16 2ZM17 19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H8C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V18H17V19ZM12 14C12.6189 14.0017 13.2222 14.1949 13.7271 14.5529C14.2319 14.911 14.6137 15.4165 14.82 16H9.18C9.38631 15.4165 9.76807 14.911 10.2729 14.5529C10.7778 14.1949 11.3811 14.0017 12 14ZM11 11C11 10.8022 11.0586 10.6089 11.1685 10.4444C11.2784 10.28 11.4346 10.1518 11.6173 10.0761C11.8 10.0004 12.0011 9.98063 12.1951 10.0192C12.3891 10.0578 12.5673 10.153 12.7071 10.2929C12.847 10.4327 12.9422 10.6109 12.9808 10.8049C13.0194 10.9989 12.9996 11.2 12.9239 11.3827C12.8482 11.5654 12.72 11.7216 12.5556 11.8315C12.3911 11.9414 12.1978 12 12 12C11.7348 12 11.4804 11.8946 11.2929 11.7071C11.1054 11.5196 11 11.2652 11 11ZM17 16H16.9C16.7548 15.3068 16.4639 14.6523 16.0467 14.08C15.6295 13.5076 15.0955 13.0304 14.48 12.68C14.8173 12.1845 14.9984 11.5994 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11C9.00162 11.5994 9.18273 12.1845 9.52 12.68C8.90449 13.0304 8.37045 13.5076 7.95326 14.08C7.53606 14.6523 7.24522 15.3068 7.1 16H7V5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V16ZM12 5C11.8022 5 11.6089 5.05865 11.4444 5.16853C11.28 5.27841 11.1518 5.43459 11.0761 5.61732C11.0004 5.80004 10.9806 6.00111 11.0192 6.19509C11.0578 6.38907 11.153 6.56725 11.2929 6.70711C11.4327 6.84696 11.6109 6.9422 11.8049 6.98079C11.9989 7.01937 12.2 6.99957 12.3827 6.92388C12.5654 6.84819 12.7216 6.72002 12.8315 6.55557C12.9414 6.39112 13 6.19778 13 6C13 5.73478 12.8946 5.48043 12.7071 5.29289C12.5196 5.10536 12.2652 5 12 5Z" fill={props.color}/>
</svg>
  );
}