import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Global
        styles={css`
          ${emotionReset}

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
