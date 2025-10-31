import { createBrowserRouter } from "react-router";

import home from "../Pages/home.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children: [
        {
            index:true,
            Component:home
        }
    ]
  },
]);


export default router