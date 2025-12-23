/*
 * @Author: phil
 * @Date: 2025-12-20 11:51:37
 */
import type { Plugin } from "vite";

export const routeVitePlugin = (): Plugin => {
  return {
    apply: "serve",
    name: "vite: auto-route",
    configResolved() {
      console.log("configResolved");
    },
  };
};
