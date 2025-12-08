/*
 * @Author: phil
 * @Date: 2025-12-03 13:57:56
 */
import { unit } from "@ant-design/cssinjs";
import { genStyleHooks, mergeToken } from "../../theme/internal";
import { prepareComponentToken, prepareToken } from "./token";
import genVariantStyle from "./variant";

const genSharedButtonStyle = (token) => {
  const { componentCls } = token;

  return {
    [componentCls]: {
      position: "relative",
      outline: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      textAlign: "center",
      backgroundImage: "none",
    },
  };
};

const genButtonStyle = (token, prefixCls = "") => {
  const {
    controlHeight,
    buttonPaddingVertical,
    buttonPaddingHorizontal,
    borderRadius,
  } = token;

  return {
    [prefixCls]: {
      height: controlHeight,
      padding: `${unit(buttonPaddingVertical!)} ${unit(
        buttonPaddingHorizontal!
      )}`,
      borderRadius,
    },
  };
};

const genSizeBaseButtonStyle = (token) => {
  const baseToken = mergeToken(token, {
    fontSize: token.contentFontSize,
  });
  return genButtonStyle(baseToken, token.componentCls);
};

export default genStyleHooks(
  "Button",
  // @ts-ignore
  (token) => {
    const buttonToken = prepareToken(token);

    return [
      genSharedButtonStyle(buttonToken),

      // size
      genSizeBaseButtonStyle(buttonToken),

      genVariantStyle(buttonToken),
    ];
  },
  prepareComponentToken,
  {}
);
