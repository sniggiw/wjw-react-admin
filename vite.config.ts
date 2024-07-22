import { ConfigEnv, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import alias from "./vite/alias";
import { parseEnv } from "./vite/util";

// export default defineConfig({
//     plugins: [react()],
//     resolve: {
//         alias,
//     },
// });

export default ({ command, mode }: ConfigEnv) => {
    const isBuild = command === "build";
    const root = process.cwd();
    const env = loadEnv(mode, root);

    console.log(parseEnv(env))

    return {
        plugins: [react()],
        resolve: {
            alias,
        },
    };
};
