/*
 * @Author: phil
 * @Date: 2025-07-23 17:05:46
 */
import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react";
import { setupVitePlugin } from "./build/plugins/index";
import { getBuildTime, createViteProxy } from "./build/config/index";

// https://vite.dev/config/
export default defineConfig((configEnv) => {
  console.log("configEnv", loadEnv(configEnv.mode, process.cwd()));

  const buildTime = getBuildTime();

  const enableProxy = configEnv.command === "serve";
  return {
    plugins: setupVitePlugin(buildTime),
    base: "/p-react-hub/",
    define: {
      BUILD_TIME: JSON.stringify(buildTime),
    },
    server: {
      port: 6789,
      proxy: createViteProxy(enableProxy),
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
