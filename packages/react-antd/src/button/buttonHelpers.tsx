import { PresetColors } from "../theme/interface/presetColors";

const _ButtonTypes = ["default", "primary", "dashed", "link", "text"] as const;

export type ButtonType = (typeof _ButtonTypes)[number];

export const _ButtonVariantTypes = [
  "outlined",
  "dashed",
  "solid",
  "filled",
  "text",
  "link",
] as const;

export type ButtonVariantType = (typeof _ButtonVariantTypes)[number];

export const _ButtonColorType = [
  "default",
  "primary",
  "danger",
  ...PresetColors,
] as const;

export type ButtonColorType = (typeof _ButtonColorType)[number];

const _ButtonShapes = ["default", "circle", "round", "square"] as const;

export type ButtonShape = (typeof _ButtonShapes)[number];

const _ButtonHTMLTypes = ["submit", "button", "reset"] as const;
export type ButtonHTMLType = (typeof _ButtonHTMLTypes)[number];
