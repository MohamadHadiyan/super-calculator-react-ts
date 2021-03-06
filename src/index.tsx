import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalProvider from "./context/GlobalProvider";

ReactDOM.render(
  <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalProvider>,
  document.getElementById("root")
);
