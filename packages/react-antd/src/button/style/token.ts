/*
 * @Author: phil
 * @Date: 2025-12-03 21:13:09
 */
import type { CSSProperties } from "react";
import { mergeToken } from "../../theme/internal";

export interface ComponentToken {

  /**
   * @description 按钮横向内间距
   */
  paddingInline: CSSProperties['paddingInline']

  /**
   * @description 默认按钮边框颜色
   */
  defaultBorderColor: string
}

export interface ButtonToken {
  buttonPaddingVertical: CSSProperties['paddingBlock']
  buttonPaddingHorizontal: CSSProperties['paddingInline']
}


export const prepareToken = (token) => {
  const { paddingInline } = token
  const buttonToken = mergeToken<ButtonToken>(token, {
    buttonPaddingVertical: 0,
    buttonPaddingHorizontal: paddingInline || 0
  });

  return buttonToken;
};



export const prepareComponentToken = (token) => {
  
  return {
    paddingInline: token.paddingContentHorizontal - token.lineWidth,
    defaultBorderColor: token.colorBorder
  }
}