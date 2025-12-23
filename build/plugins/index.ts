/*
 * @Author: phil
 * @Date: 2025-12-20 11:12:58
 */
import type { PluginOption } from "vite";
import { setupProjectInfo } from "./info";
import removeConsole from "vite-plugin-remove-console";
import { setupElegantRouter } from "./router";
import { setupUnocss } from "./unocss";
import { setupAutoImport } from "./auto-import";

export function setupVitePlugin() {
  const plugins: PluginOption = [
    setupProjectInfo(),
    removeConsole(),
    setupElegantRouter(),
    // 处理css原子化
    setupUnocss(),
    // 自动引入组件
    setupAutoImport(),
  ];

  return plugins;
}
