/*
 * @Author: phil
 * @Date: 2025-12-04 15:08:03
 */

import type { AliasToken } from "../interface/alias";

export default function formatToken(derivativeToken): AliasToken {
  const { override, ...resToken } = derivativeToken;
  const overrideTokens = { ...override };

  const mergedToken = {
    ...overrideTokens,
    ...resToken,
  };

  const aliasToken: AliasToken = {
    paddingContentHorizontal: 10,

    colorTextLightSolid: mergedToken.colorWhite,

    ...overrideTokens,
  };

  return aliasToken;
}
