import { ReactNode } from "react";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import Dashboard from "../pages/admin/Dashboard";

type TAdminRoutesType = {
  path: string;
  element: ReactNode;
};

// admin paths two
const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

// applying reduce method

export const adminRoutes = adminPaths.reduce(
  (acc: TAdminRoutesType[], item) => {
    if (item.path && item.element) {
      acc.push({ path: item.path, element: item.element });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({ path: child.path, element: child.element });
      });
    }
    return acc;
  },
  []
);

// admin paths hardcoded way

// export const adminPaths = [
//   {
//     index: true,
//     element: <Dashboard />,
//   },
//   {
//     path: "dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
// ];
