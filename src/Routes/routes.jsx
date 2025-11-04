import { createBrowserRouter } from "react-router";

import home from "../Pages/home.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import AllApps from "../Pages/AllApps.jsx";
import AppInfo from "../Pages/AppInfo.jsx";
import InstallList from "../Pages/InstallList.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage/>,

    children: [
        {
            index:true,
            Component:home,
            loader: () => fetch('/public/appData.json')
        },
        {
          path:'/allApps',
          Component:AllApps
        },
        {
          path:'/appInfo/:id',
          Component:AppInfo
        },
        {
          path:'/installList',
          Component:InstallList
        },
        
    ]
  },
]);


export default router