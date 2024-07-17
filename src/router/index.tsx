import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import layoutRoutes from "./autoload";

const router = createBrowserRouter([...routes, ...layoutRoutes]);

export default router;
