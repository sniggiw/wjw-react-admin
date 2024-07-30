import ReactDOM from "react-dom/client";
import App from "./App";
import { setupPlugins } from "./plugins";
setupPlugins();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
