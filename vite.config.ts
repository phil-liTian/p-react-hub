/*
 * @Author: phil
 * @Date: 2025-07-23 17:05:46
 */
import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import { setupVitePlugin } from "./build/plugins/index";

// https://vite.dev/config/
export default defineConfig((configEnv) => {
  console.log("configEnv", configEnv);

  return {
    plugins: setupVitePlugin(),
    base: "/p-react-hub/",
    server: {
      port: 6789,
    },
    resolve: {
      alias: {
        "@": "/src",
        "@c": "/src/components",
        "@ca": "/src/components/admin",
        "@admin": "/src/pages/admin",
      },
    },
  };
});
