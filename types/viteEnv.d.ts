interface ViteEnv {
    VITE_SOME_KEY: string;
    VITE_ROUTE_AUTOLOAD: boolean;
    VITE_API_URL: string;
}

interface ImportMetaEnv extends ViteEnv {}
