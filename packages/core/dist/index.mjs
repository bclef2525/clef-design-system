// src/components/Button/Button.tsx
import React2 from "react";

// src/theme/ThemeProvider.tsx
import React from "react";
var ThemeContext = React.createContext({});
var ThemeProvider = ({
  theme = {},
  children
}) => {
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, { value: theme }, children);
};

// src/components/Button/Button.tsx
var Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}) => {
  const theme = React2.useContext(ThemeContext);
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md";
  const variantStyles = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm hover:shadow active:bg-primary-800",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 shadow-sm hover:shadow active:bg-gray-400",
    outline: "bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 active:bg-primary-100",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 active:bg-gray-200"
  };
  const sizeStyles = {
    small: "px-3 py-1.5 text-sm gap-1.5",
    medium: "px-4 py-2 text-base gap-2",
    large: "px-6 py-3 text-lg gap-2.5"
  };
  const disabledStyles = disabled || isLoading ? "opacity-60 cursor-not-allowed" : "";
  return /* @__PURE__ */ React2.createElement(
    "button",
    {
      className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`,
      disabled: disabled || isLoading,
      ...props
    },
    isLoading && /* @__PURE__ */ React2.createElement(
      "svg",
      {
        className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ React2.createElement(
        "circle",
        {
          className: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ React2.createElement(
        "path",
        {
          className: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ),
    !isLoading && leftIcon && /* @__PURE__ */ React2.createElement("span", { className: "flex-shrink-0" }, leftIcon),
    /* @__PURE__ */ React2.createElement("span", null, children),
    !isLoading && rightIcon && /* @__PURE__ */ React2.createElement("span", { className: "flex-shrink-0" }, rightIcon)
  );
};
export {
  Button,
  ThemeContext,
  ThemeProvider
};
