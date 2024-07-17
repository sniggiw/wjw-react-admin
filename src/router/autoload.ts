import { RouteObject } from "react-router-dom";

const layouts = import.meta.glob("../layouts/*.tsx", { eager: true });
const pages = import.meta.glob("../pages/**/*.tsx", { eager: true });

function getRoutes() {
    const layoutRoutes = [] as RouteObject[];
    Object.entries(layouts).forEach(([path, module]) => {
        const route = getRouteByModule(path, module as { [key: string]: any });
        route.children = getChildrenRoutes(route);
        layoutRoutes.push(route);
    });
    return layoutRoutes;
}

function getChildrenRoutes(route: RouteObject) {
    const routes = [] as RouteObject[];
    Object.entries(pages).forEach(([path, module]) => {
        const layoutName = route.path!.split("/").pop();
        if (path.includes(`../pages/${layoutName}`)) {
            const route = getRouteByModule(path, module as { [key: string]: any });
            routes.push(route);
        }
    });
    return routes;
}

function getRouteByModule(path: string, module: { [key: string]: any }) {
    const name = path.replace(/.+layouts\/|.+pages\/|\.tsx/gi, "");
    const route = {
        path: `/${name}`,
        element: module.default(),
    } as RouteObject;
    return route;
}

export default getRoutes();
