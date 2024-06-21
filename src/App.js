import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Rootlayout from "./root";
import Home from "./home";
import Signin from "./fund";
import Signup from "./donate";
import Technologies from "./tech";

import Mongo from "./mongodb";
import Ex from "./express";
import R from "./reactt";
import Node from "./node";
import "./App.css";
function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Rootlayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "signin",
          element: <Signin />,
        },
        {
          path: "technologies",
          element: <Technologies />,
          children: [
            {
              path: "mongo",
              element: <Mongo />,
            },
            {
              path: "express",
              element: <Ex />,
            },
            {
              path: "react",
              element: <R />,
            },
            {
              path: "node",
              element: <Node />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
