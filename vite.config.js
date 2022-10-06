import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        react(),
    ],
<<<<<<< HEAD
    
    
=======
    server: {
        https: true,
        hmr: {
            host: "notebook-production.up.railway.app",
        },
        port: 3001
    },
>>>>>>> 86d2474b893052628e86ab312d68b1d76aa8229b
});
