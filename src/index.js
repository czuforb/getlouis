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
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
          body {
            font-family: "Open Sans", sans-serif;
          }
          .swiper-container {
            width: 100%;
            height: 100%;
          }

          .swiper-button-prev,
          .swiper-button-next {
            color: white;
          }
        `}
      />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
