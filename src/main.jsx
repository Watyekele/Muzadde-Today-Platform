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
import Subscription from "./Components/Subscription.jsx";
import Login from "./pages/login.jsx";
import SignUp from "./pages/SignUp.jsx";
import BVlogs from "./pages/layouts/BVlogs.jsx";
import Details from "./pages/layouts/Details.jsx";

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
  {
    path: "/subscription",
    element: <Subscription />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/bvlogs",
    element: <BVlogs />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
