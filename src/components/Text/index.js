import React from "react";
const variantClasses = {
  h1: "font-medium lg:text-[5px] xl:text-[7px] text-[8px] 3xl:text-[9px]",
  h2: "font-bold lg:text-[45px] xl:text-[56px] text-[64px] 3xl:text-[76px]",
  h3: "font-semibold lg:text-[28px] xl:text-[35px] text-[40px] 3xl:text-[48px]",
  h4: "font-bold lg:text-[22px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  h5: "font-normal lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h6: "font-normal lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body1: "font-normal xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
