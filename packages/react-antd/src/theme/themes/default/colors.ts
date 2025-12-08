/*
 * @Author: phil
 * @Date: 2025-12-05 10:19:17
 */

import { generate } from "@ant-design/colors";
import type { GenerateColorMap, GenerateNeutralColorMap } from "../ColorMap";

/**
 * 生成中性色板
 * @param bgBaseColor 背景基色，缺省为'#fff'
 * @returns 含colorBgBase与colorBorder的对象
 */
export const generateNeutralColorPalettes: GenerateNeutralColorMap = (
  bgBaseColor: string
) => {
  const colorBgBase = bgBaseColor || "#fff";
  return {
    colorBgBase,
    colorBorder: colorBgBase,
  };
};

export const generateColorPalettes: GenerateColorMap = (baseColor: string) => {
  const colors = generate(baseColor);
  return {
    1: colors[1],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6],
  };
};
