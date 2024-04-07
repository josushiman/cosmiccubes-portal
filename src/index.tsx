import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import TimePeriodProvider from "./context/TimePeriodContext";
import ModalContextProvider from "./context/ModalContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TimePeriodProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </TimePeriodProvider>
  </React.StrictMode>
);
