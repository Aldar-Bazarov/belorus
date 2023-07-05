import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "./app-container";

export function ReactApplicationContainer(): JSX.Element {
  return (
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  );
}
