import { RouteObject } from "react-router-dom";

const layouts = import.meta.glob("../layouts/*.tsx", { eager: true });

function getRoutes() {
    const layoutRoutes = [] as RouteObject[];
    Object.entries(layouts).forEach(([path, module]) => {
        const route = getRouteByModule(path, module as { [key: string]: any });
        layoutRoutes.push(route);
    });
    return layoutRoutes;
}

function getRouteByModule(path: string, module: { [key: string]: any }) {
    const name = path.split("/").pop()?.split(".")[0];
    const route = {
        path: `/${name}`,
        element: module.default,
    } as RouteObject;
    return route;
}

export default getRoutes();
