import React from 'react';
import {ITitleSub} from "../interfaces";
import cn from 'classnames';


export const TitleSub: React.FC<ITitleSub> = ({type, children, className}) => {
  const jsx = React.createElement;
  return jsx(
    type,
    {
      className: cn( "text-lg", className),
    },
    children
  )
};
