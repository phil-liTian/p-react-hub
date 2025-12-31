import type { AdminLayoutProps } from "../../types";

function createLayoutCssVarsByCssVarsProps(props) {
  const cssVars = {
    "--p-sider-width": `${props.siderWidth}px`,
  };

  return cssVars;
}

export function createLayoutCssVars(
  props: Required<Pick<AdminLayoutProps, "siderWidth">>
) {
  const { siderWidth } = props;

  const cssProps = {
    siderWidth,
  };

  return createLayoutCssVarsByCssVarsProps(cssProps);
}
