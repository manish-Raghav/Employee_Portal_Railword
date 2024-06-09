import React from "react";

const sizes = {
  xs: "text-xs font-light",
  lg: "text-lg font-medium",
  s: "text-sm font-light",
  xl: "text-xl font-light",
  md: "text-base font-light",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-[#a1a0a7] font-['Lexend'] ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };