import React from 'react';
import {NavLink} from "react-router-dom";

const AppNavigator: React.FC = () => {
  
  return (
    <nav className="flex justify-center max-h-[150px] gap-[25px] items-center p-[30px] bg-amber-50">
      <NavLink className="hover:text-amber-200" to="/">Home</NavLink>
      <NavLink className="hover:text-amber-200" to="/about">About</NavLink>
    </nav>
  );
};

export default AppNavigator;