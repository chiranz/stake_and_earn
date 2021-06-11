import React, {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  ReactElement,
} from "react";
import { ErrorIcon } from "../../assets/SvgIcons";

interface FieldProps extends HTMLAttributes<HTMLElement> {
  disabled?: boolean;
  dot?: boolean;
  error?: string;
  icon?: JSX.Element;
  label?: string;
  name: string;
  type: string;
}
type Ref = ForwardedRef<never>;

const style = {
  checkbox: `checked:bg-blue-500 checked:right-0 focus:outline-none right-4 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`,
  checkboxContainer: `relative w-10 mr-2 align-middle select-none mt-2`,
  checkboxLabel: `block overflow-hidden h-6 rounded-full bg-gray-300`,
  container: `relative`,
  default: `text-base relative flex flex-1 w-full mt-1 rounded-md py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:border-transparent border border-transparent`,
  disabled: `cursor-not-allowed`,
  dot: `text-red-500 pl-0.5`,
  error: `ring-red-500 ring-1`,
  errorMessage: `text-sm text-red-500 mt-2`,
  iconContainer: `absolute flex border border-transparent left-0 top-0 h-full w-10`,
  icon: `flex items-center justify-center rounded-tl rounded-bl z-10 text-gray-400 text-lg h-full w-full`,
};

const Field = forwardRef((props: FieldProps, ref: Ref) => {
  const {
    disabled,
    dot,
    type = "text",
    error,
    icon,
    label,
    name,
    ...rest
  } = props;

  let component: ReactElement;

  // if you won't use select, you can delete this part
  if (type === "select") {
    component = (
      <select
        aria-required={dot}
        aria-invalid={!!error}
        className={`${style.default} ${disabled ? style.disabled : ""}
           ${error ? style.error : "border-gray-300"}`}
        disabled={disabled}
        id={name}
        name={name}
        ref={ref}
        {...rest}
      />
    );
  }

  // if you won't use textarea, you can delete this part
  if (type === "textarea") {
    component = (
      <textarea
        aria-required={dot}
        aria-invalid={!!error}
        className={`${style.default} ${disabled ? style.disabled : ""} 
          ${error ? style.error : "border-gray-300"}`}
        disabled={disabled}
        id={name}
        name={name}
        ref={ref}
        {...rest}
      />
    );
  }

  // if you won't use checkbox, you can delete this part and the classes checkbox, checkboxContainer and checkboxLabel
  if (type === "checkbox") {
    component = (
      <div className={style.checkboxContainer}>
        <input
          aria-required={dot}
          aria-invalid={!!error}
          className={`${style.checkbox} ${disabled ? style.disabled : ""}`}
          disabled={disabled}
          id={name}
          name={name}
          type="checkbox"
          {...rest}
        />
        <span className={style.checkboxLabel} />
      </div>
    );
  }

  // if you won't use input, you can delete this part
  if (type !== "checkbox" && type !== "select" && type !== "textarea") {
    component = (
      <div className="relative">
        <div className={style.iconContainer}>
          <div className={style.icon}>{icon}</div>
        </div>
        <input
          aria-required={dot}
          aria-invalid={!!error}
          className={`${style.default} ${icon ? "pl-12" : ""}  
            ${error ? style.error : "border-gray-300"} 
            ${disabled ? style.disabled : ""} `}
          disabled={disabled}
          id={name}
          name={name}
          type={type}
          ref={ref}
          {...rest}
        />
        {error && <ErrorIcon />}
      </div>
    );
  }

  return (
    <div className={`${style.container} ${disabled ? "opacity-50" : ""}`}>
      <label htmlFor={name} className="text-gray-700">
        {label}
        {dot && <span className={style.dot}>*</span>}
      </label>
      {component}
      {error && <p className={style.errorMessage}>{error}</p>}
    </div>
  );
});
export default Field;
