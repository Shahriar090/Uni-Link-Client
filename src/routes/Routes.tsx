import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { adminRoutes } from "./AdminRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  //   admin layout
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
  // faculty
  {
    path: "/faculty",
    element: <App />,
    children: adminRoutes,
  },
  // student
  {
    path: "/student",
    element: <App />,
    children: adminRoutes,
  },
]);
