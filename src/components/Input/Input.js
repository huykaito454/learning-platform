import React from "react";

const Input = ({
  register,
  children,
  className,
  placeholder = "",
  errors = "",
  ...props
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        className={`outline-none py-3 px-6 rounded-lg border-2 border-border1 w-full ${className} ${
          errors.length > 0 ? " border-red-400" : ""
        }`}
        placeholder={errors.length <= 0 ? placeholder : ""}
        {...register}
        {...props}
      />
      {errors.length > 0 && (
        <span className="text-red-400 text-sm pointer-events-none top-1/2 -translate-y-1/2 left-6 error-input">
          {errors}
        </span>
      )}
      {children}
    </div>
  );
};

export default Input;
