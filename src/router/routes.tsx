import { RouteObject } from "react-router-dom";

import Admin from "@/layouts/admin";
import Home from "@/pages/home";

const routes: RouteObject[] = [
    // {
    //     path: "/",
    //     element: <Home />
    // },
    {
        path: "/",
        element: <Home />,
    },
];

export default routes;
