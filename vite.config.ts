import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {federation} from "@module-federation/vite";

export default defineConfig({
    base: "CH:BASE_URL",
    plugins: [
        react(),
        federation({
            name: "CH:MF_NAME",
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/App.tsx",
                "./manifest": "./src/manifest.ts"
            },
            shared: {
                react: {singleton: true},
                "react-dom": {singleton: true},
                "lms-core": {singleton: true},
            },
            dts: false,
        })
    ],
    server: {
        port: CH_PORT,
        strictPort: true
    },
    preview: {
        port: CH_PORT,
        strictPort: true
    },
});