import { useContext } from "react";
import { genStyleUtils } from "@ant-design/cssinjs-utils";
import { configContext } from "../../config-provider/context";
import useLocalToken from "../useToken";

export const { genStyleHooks } = genStyleUtils({
  usePrefix: () => {
    const { getPrefixCls, iconPrefixCls } = useContext(configContext);

    const rootPrefixCls = getPrefixCls();
    return {
      rootPrefixCls,
      iconPrefixCls,
    };
  },
  // @ts-ignore
  useToken: () => {
    const [theme, realToken, hashId, token, cssVar] = useLocalToken();

    return { theme, realToken, hashId, token, cssVar };
  },

  // useCSP: () => {
  //   const { csp } = useContext(configContext);
  //   return csp ?? {};
  // },
});

export const genCssVar = (antCls: string, componentAbbr: string) => {
  const cssPrefix = `--${antCls.replace(".", "")}-${componentAbbr}-`;

  return (name: string, withVar = false) => {
    const raw = `${cssPrefix}${name}`;
    return withVar ? `var(${raw})` : raw;
  };
};
