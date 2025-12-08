import type { MapToken } from "./maps";

/*
 * @Author: phil
 * @Date: 2025-12-03 20:23:07
 */
export interface AliasToken extends MapToken {
  /**
   * @description 内容水平内间距
   */
  paddingContentHorizontal: number;

  /**
   * @description 固定文本高亮颜色
   */
  colorTextLightSolid: string;
}
