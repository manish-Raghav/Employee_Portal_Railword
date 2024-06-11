import React from "react";

const sizes = {
  s: "text-xl font-semibold",
  xs: "text-lg font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-[#16141b] font-['Lexend'] ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
