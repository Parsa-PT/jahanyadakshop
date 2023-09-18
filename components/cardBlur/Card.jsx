import React from "react";
import './cardStyle.css'

const Card = ({ children , style }) => {
  return (
    <div>
      <div
        className={`cardbg ${style}`} 
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
