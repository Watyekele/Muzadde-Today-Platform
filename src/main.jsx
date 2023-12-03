import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home.jsx";
import BlogsPage from "./pages/Blogs.jsx";
import FAQ from "./pages/Muzadde-Plus-page.jsx";
import Talk from "./pages/Talk.jsx";
import AskExp from "./pages/Ask-Expert-Page.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/blogs",
    element: <BlogsPage />,
  },
  {
    path: "/muzadde-Plus-page",
    element: <FAQ />,
  },
  {
    path: "/talk",
    element: <Talk />,
  },
  {
    path: "/askExp",
    element: <AskExp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
