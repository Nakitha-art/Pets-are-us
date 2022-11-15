import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder16: "rounded-radius16",
  RoundedBorder8: "rounded-radius8",
};
const variants = {
  OutlineWhiteA700:
    "bg-amber_600 border-2 border-solid border-white_A700 text-white_A700",
  OutlineWhiteA700_1: "border border-solid border-white_A700 text-white_A700",
  FillBlack9007f: "bg-black_900_7f text-white_A700_72",
  FillAmber600: "bg-amber_600 text-white_A700",
};
const sizes = {
  sm: "lg:p-[5px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  md: "xl:p-[12px] p-[14px] 3xl:p-[16px] lg:p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder16", "RoundedBorder8"]),
  variant: PropTypes.oneOf([
    "OutlineWhiteA700",
    "OutlineWhiteA700_1",
    "FillBlack9007f",
    "FillAmber600",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder16",
  variant: "OutlineWhiteA700",
  size: "md",
};

export { Button };
