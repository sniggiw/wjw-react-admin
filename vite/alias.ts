import {AliasOptions} from "vite";
import path from "node:path";

const alias = {
    "@": path.resolve(__dirname, "../src"),
} as AliasOptions

export default alias;
