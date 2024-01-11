import React from 'react';
import { IconProps } from "../styles";

export function ObjectUngroup(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21 18.28V11.72C21.2704 11.5695 21.5023 11.3584 21.6773 11.1032C21.8523 10.8479 21.9657 10.5556 22.0085 10.2491C22.0514 9.94257 22.0225 9.63031 21.9242 9.33686C21.8259 9.04342 21.6608 8.77679 21.442 8.55795C21.2232 8.33912 20.9566 8.17406 20.6631 8.07575C20.3697 7.97745 20.0574 7.94858 19.7509 7.99143C19.4444 8.03427 19.152 8.14766 18.8968 8.32267C18.6416 8.49768 18.4304 8.72953 18.28 8.99998H15V5.71998C15.2704 5.56955 15.5023 5.3584 15.6773 5.10317C15.8523 4.84793 15.9657 4.55556 16.0085 4.24906C16.0514 3.94257 16.0225 3.63031 15.9242 3.33686C15.8259 3.04342 15.6608 2.77679 15.442 2.55795C15.2232 2.33912 14.9565 2.17406 14.6631 2.07575C14.3697 1.97745 14.0574 1.94858 13.7509 1.99143C13.4444 2.03427 13.152 2.14766 12.8968 2.32267C12.6416 2.49768 12.4304 2.72953 12.28 2.99998H5.71998C5.56955 2.72953 5.3584 2.49768 5.10317 2.32267C4.84793 2.14766 4.55556 2.03427 4.24906 1.99143C3.94257 1.94858 3.63031 1.97745 3.33686 2.07575C3.04342 2.17406 2.77679 2.33912 2.55795 2.55795C2.33912 2.77679 2.17406 3.04342 2.07575 3.33686C1.97745 3.63031 1.94858 3.94257 1.99143 4.24906C2.03427 4.55556 2.14766 4.84793 2.32267 5.10317C2.49768 5.3584 2.72953 5.56955 2.99998 5.71998V12.28C2.72953 12.4304 2.49768 12.6416 2.32267 12.8968C2.14766 13.152 2.03427 13.4444 1.99143 13.7509C1.94858 14.0574 1.97745 14.3697 2.07575 14.6631C2.17406 14.9565 2.33912 15.2232 2.55795 15.442C2.77679 15.6608 3.04342 15.8259 3.33686 15.9242C3.63031 16.0225 3.94257 16.0514 4.24906 16.0085C4.55556 15.9657 4.84793 15.8523 5.10317 15.6773C5.3584 15.5023 5.56955 15.2704 5.71998 15H8.99998V18.28C8.72953 18.4304 8.49768 18.6416 8.32267 18.8968C8.14766 19.152 8.03427 19.4444 7.99143 19.7509C7.94858 20.0574 7.97745 20.3697 8.07575 20.6631C8.17406 20.9566 8.33912 21.2232 8.55795 21.442C8.77679 21.6608 9.04342 21.8259 9.33686 21.9242C9.63031 22.0225 9.94257 22.0514 10.2491 22.0085C10.5556 21.9657 10.8479 21.8523 11.1032 21.6773C11.3584 21.5023 11.5695 21.2704 11.72 21H18.28C18.4304 21.2704 18.6416 21.5023 18.8968 21.6773C19.152 21.8523 19.4444 21.9657 19.7509 22.0085C20.0574 22.0514 20.3697 22.0225 20.6631 21.9242C20.9566 21.8259 21.2232 21.6608 21.442 21.442C21.6608 21.2232 21.8259 20.9566 21.9242 20.6631C22.0225 20.3697 22.0514 20.0574 22.0085 19.7509C21.9657 19.4444 21.8523 19.152 21.6773 18.8968C21.5023 18.6416 21.2704 18.4304 21 18.28ZM7.99998 9.99998C8.00209 10.349 8.0955 10.6914 8.27093 10.9932C8.44636 11.2949 8.69771 11.5455 8.99998 11.72V13H5.71998C5.54956 12.6993 5.30071 12.4504 4.99998 12.28V5.71998C5.30071 5.54956 5.54956 5.30071 5.71998 4.99998H12.28C12.4504 5.30071 12.6993 5.54956 13 5.71998V8.99998H11.72C11.4973 8.62457 11.1579 8.33233 10.7536 8.16784C10.3492 8.00335 9.90221 7.97565 9.48068 8.08896C9.05914 8.20228 8.68626 8.45039 8.41891 8.79543C8.15156 9.14047 8.00444 9.56351 7.99998 9.99998ZM13 11V12.28C12.6993 12.4504 12.4504 12.6993 12.28 13H11V11.72C11.3007 11.5496 11.5496 11.3007 11.72 11H13ZM19 18.28C18.6993 18.4504 18.4504 18.6993 18.28 19H11.72C11.5496 18.6993 11.3007 18.4504 11 18.28V15H12.28C12.4304 15.2704 12.6416 15.5023 12.8968 15.6773C13.152 15.8523 13.4444 15.9657 13.7509 16.0085C14.0574 16.0514 14.3697 16.0225 14.6631 15.9242C14.9565 15.8259 15.2232 15.6608 15.442 15.442C15.6608 15.2232 15.8259 14.9565 15.9242 14.6631C16.0225 14.3697 16.0514 14.0574 16.0085 13.7509C15.9657 13.4444 15.8523 13.152 15.6773 12.8968C15.5023 12.6416 15.2704 12.4304 15 12.28V11H18.28C18.4504 11.3007 18.6993 11.5496 19 11.72V18.28Z" fill={props.color}/>
</svg>
  );
}