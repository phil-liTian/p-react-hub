/*
 * @Author: phil
 * @Date: 2025-12-03 19:43:31
 */

import { useContext } from "react";
import { useCacheToken } from "@ant-design/cssinjs";
import { DesignTokenContext } from "./context";
import defaultSeedToken from "./themes/seed";
import defaultTheme from "./themes/default/theme";
import formatToken from "./utils/alias";

export const getComputedToken = (originToken, overrideToken, theme) => {
  const { override } = overrideToken;
  const derivativeToken = theme.getDerivativeToken(originToken);
  let mergedDerivativeToken = {
    ...derivativeToken,
    override,
  };
  mergedDerivativeToken = formatToken(mergedDerivativeToken);

  return mergedDerivativeToken;
};

export default function useToken() {
  const {
    token: rootDesignToken,
    theme,
    hashed,
    override,
  } = useContext(DesignTokenContext);

  const mergedTheme = theme || defaultTheme;

  const cssVar = {
    key: "css-var-root",
    prefix: "ant",
  };

  const [token, hashId, realToken] = useCacheToken(
    mergedTheme,
    // @ts-ignore
    [defaultSeedToken, rootDesignToken],
    { override, getComputedToken, cssVar: { ...cssVar } }
  );

  return [mergedTheme, realToken, hashed ? hashId : "", token, cssVar];
}
