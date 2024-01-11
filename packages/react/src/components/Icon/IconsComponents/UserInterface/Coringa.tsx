import React from 'react';
import { IconProps } from "../styles";

export function Coringa(props: IconProps): JSX.Element {
  return (
<svg className={props.className} width="20" height="20" viewBox="0 0 20 20" fill={props.color} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="20" height="20" fill={props.color}/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_209_3372" transform="scale(0.015625)"/>
</pattern>
<image id="image0_209_3372" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAONJREFUeF7t20EOhEAIRFG4/6F7DvEnYeFzryQIv6pBd2behOu9dPvsbog+k+NLgArQAqmJcw9iAAhSgZKB3IJkkAySQTJ4CiE+gA8oBeg0mH3Ai084P89HhqwEqIA209ICsQdjAeaZIgaAYKxBDMCAYy8fXwAIgiAIcoJpJEYGI4VjB3YrbC9gL2AvkCB43cM5PgZgAAZgQFnNZAhdGykQBEEQBEEQDBmgAm2glM/z+QUYisYUGoldO7kY32IEAzCg6RgIRgjFAsw+AgRBMNYgBmCAT2TCYfoPPz/HCqQCX1eBHzHnv7C7WhBSAAAAAElFTkSuQmCC"/>
</defs>
</svg>
  );
}