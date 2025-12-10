/*
 * @Author: phil
 * @Date: 2025-07-23 17:05:46
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/p-react-hub/",
  server: {
    port: 6789,
  },
  resolve: {
    alias: {
      "@": "/src",
      "@c": "/src/components",
    },
  },
});
