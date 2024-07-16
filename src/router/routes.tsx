import { RouteObject } from "react-router-dom";

import App from "@/App";
import Home from "@/pages/home";
import Admin from "@/layouts/admin";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Admin />,
                children: [
                    {
                        path: "admin",
                        element: <Home />,
                    },
                ],
            },
        ],
    },
];

export default routes;