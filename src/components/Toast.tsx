import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  DangerIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from "../assets/SvgIcons";

type MessageTypeProps = "success" | "danger" | "info" | "warning";

type ToastProps = {
  type?: MessageTypeProps;
  message: string;
  position?: PositionProps;
  duration?: number;
};
type PositionProps = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

const borderColors = {
  success: "border-green-400",
  warning: "border-yellow-400",
  danger: "border-red-400",
  info: "border-blue-400",
};

export const triggerToast = ({
  type = "info",
  message,
  position = "topRight",
  duration = 4000,
}: ToastProps) => {
  ReactDOM.render(
    <ToastContainer duration={duration} placement={position} type={type}>
      {message}
    </ToastContainer>,
    document.getElementById("toast")
  );
};

const ToastContainer = ({ children, placement, duration, type = "info" }) => {
  const [closeTimeout, setCloseTimeout] = useState(null);

  useEffect(() => {
    beginCloseTimeout();

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        ReactDOM.unmountComponentAtNode(document.getElementById("toast"));
      }
    };
    document.addEventListener("keyup", handleEscape);

    return () => {
      document.removeEventListener("keyup", handleEscape);
    };
  }, []);

  const closeSnackBar = () => {
    clearTimeout(closeTimeout);
    ReactDOM.unmountComponentAtNode(document.getElementById("toast"));
  };

  const beginCloseTimeout = () => {
    if (duration) {
      const timeout = setTimeout(() => closeSnackBar(), duration);
      setCloseTimeout(timeout);
    }
  };

  return (
    <div
      className={`${placements[placement]} flex fixed bg-white shadow-lg rounded text-sm py-3 z-10 px-4 border-l-4 ${borderColors[type]}`}
      onMouseEnter={() => clearTimeout(closeTimeout)}
    >
      <div className="pr-1">
        {type === "danger" && <DangerIcon />}
        {type === "success" && <SuccessIcon />}
        {type === "warning" && <WarningIcon />}
        {type === "info" && <InfoIcon />}
      </div>
      {children}
    </div>
  );
};

/* The placement of toast (topLeft, topRight, bottomLeft and bottomRight)*/
const placements = {
  topLeft: "animate-left top-10 left-10",
  topRight: "animate-right top-20 right-20",
  bottomLeft: "animate-left bottom-6 left-4",
  bottomRight: "animate-right bottom-6 right-4",
};

import Document, { Html, Head, Main, NextScript } from "next/document";

/* Add <div id="toast"/> inside pages/_document.js with Next.js*/

/* if you are using create-react-app, just add <div id="toast"/> in public/index.html*/

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <div id="toast" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
