import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routeGenerator";
import { adminPaths } from "./AdminRoutes";
import { facultyPaths } from "./FacultyRoutes";
import { studentPaths } from "./StudentRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  //   admin layout
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  // faculty
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyPaths),
  },
  // student
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(studentPaths),
  },
]);
