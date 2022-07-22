import React from "react";

const Button = ({ children, className = "", isLoading = false, ...rest }) => {
  return (
    <button className={`button ${className} `} {...rest}>
      {children}
    </button>
  );
};

export default Button;
