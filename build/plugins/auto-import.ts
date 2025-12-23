import AutoImport from "unplugin-auto-import/vite";

export function setupAutoImport() {
  return AutoImport({
    dts: "src/types/auto-imports.d.ts",
    imports: ["react", "react-router-dom"],
  });
}
