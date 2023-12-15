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
import Questions from "./pages/Questions.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import ForgotPassword from "./Components/Forgotpassword.jsx";

import Details from "./pages/layouts/Details.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

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
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-h33vh3ddi3fzu543.us.auth0.com"
    clientId="eM1czitHknpMztnyra4fXzDQBCsjnOhB"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  </Auth0Provider>
);
