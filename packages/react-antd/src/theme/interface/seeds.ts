import type { PresetColorType } from "./presetColors";
export interface SeedToken extends PresetColorType {
  /**
   * @description 主色
   */
  colorPrimary: string;

  /**
   * @description 成功色
   */
  colorSuccess: string;

  /**
   * @description 信息色
   */
  colorInfo: string;

  /**
   * @description 基础色背景
   */
  colorBgBase: string;

  /**
   * @description 链接的颜色
   */
  colorLink: string;

  /**
   * @description 基础高度
   * @default 32
   */
  controlHeight: number;

  /**
   * @description 基础线宽
   * @default 1
   */

  lineWidth: number;

  /**
   * @description 字体大小
   * @default 14
   */
  fontSize: number;

  /**
   * @description 圆角
   * @default 6
   */
  borderRadius: number;
}
