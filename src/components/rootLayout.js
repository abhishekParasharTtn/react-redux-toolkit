import React from "react";
import { Outlet } from "react-router-dom";
import Nevbar from "./nevbar";
import { Provider } from "react-redux";
import store from "../store/store";
function RootLayout() {
  return (
    <>
      <Provider store={store}>
        <Nevbar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
}

export default RootLayout;
