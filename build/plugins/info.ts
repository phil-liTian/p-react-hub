import { themeSettings } from "../../src/theme/settings";
import boxen, { type Options as BoxenOptions } from "boxen";
import gradientString from "gradient-string";
import type { Plugin } from "vite";

export function setupProjectInfo(): Plugin {
  const welcomeMessage = gradientString(
    themeSettings.themeColor,
    "magenta"
  ).multiline(
    `您好! 欢迎使用 React 综合演示平台\n当前系统包含一个react-admin项目\nreact-hook项目\n个人介绍`
  );

  const boxenOptions: BoxenOptions = {
    borderColor: themeSettings.themeColor,
    borderStyle: "round",
    padding: 0.5,
  };

  return {
    name: "vite:buildInfo",
    buildStart() {
      console.log(boxen(welcomeMessage, boxenOptions));
    },
  };
}
