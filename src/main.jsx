import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/index.ts";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Error from "./Components/Error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
