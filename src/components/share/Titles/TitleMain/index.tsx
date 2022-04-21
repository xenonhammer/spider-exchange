import React from 'react';
import {ITitleMain} from "../interfaces";


export const TitleMain: React.FC<ITitleMain> = ({type, children}) => {
  const jsx = React.createElement;
  return jsx(
    type,
    {
      className: "text-3xl p-[30px]",
    },
    children
  )
};
