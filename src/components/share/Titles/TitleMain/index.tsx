import React from 'react';
import {ITitleMain} from "../interfaces";
import cn from 'classnames';

export const TitleMain: React.FC<ITitleMain> = ({type, children, className}) => {
  const jsx = React.createElement;
  return jsx(
    type,
    {
      className: cn( "text-3xl p-[30px]", className),
    },
    children
  )
};
