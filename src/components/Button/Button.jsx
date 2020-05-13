import React from "react";
import style from "./Button.module.css";

const Button = ({onClick, className, text})=> {

  return (
    <button 
      type="button" 
      className={`${style.button} ${className && className }`}
      onClick={ onClick }>
      {text}
    </button>
  );
  
}

export default Button;
