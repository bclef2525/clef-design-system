"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  ThemeContext: () => ThemeContext,
  ThemeProvider: () => ThemeProvider
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/Button.tsx
var import_react2 = __toESM(require("react"));

// src/theme/ThemeProvider.tsx
var import_react = __toESM(require("react"));
var ThemeContext = import_react.default.createContext({});
var ThemeProvider = ({
  theme = {},
  children
}) => {
  return /* @__PURE__ */ import_react.default.createElement(ThemeContext.Provider, { value: theme }, children);
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
  const theme = import_react2.default.useContext(ThemeContext);
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
  return /* @__PURE__ */ import_react2.default.createElement(
    "button",
    {
      className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`,
      disabled: disabled || isLoading,
      ...props
    },
    isLoading && /* @__PURE__ */ import_react2.default.createElement(
      "svg",
      {
        className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ import_react2.default.createElement(
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
      /* @__PURE__ */ import_react2.default.createElement(
        "path",
        {
          className: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ),
    !isLoading && leftIcon && /* @__PURE__ */ import_react2.default.createElement("span", { className: "flex-shrink-0" }, leftIcon),
    /* @__PURE__ */ import_react2.default.createElement("span", null, children),
    !isLoading && rightIcon && /* @__PURE__ */ import_react2.default.createElement("span", { className: "flex-shrink-0" }, rightIcon)
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  ThemeContext,
  ThemeProvider
});
