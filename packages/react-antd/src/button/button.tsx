/*
 * @Author: phil
 * @Date: 2025-12-03 10:59:31
 */

import React, { useMemo } from "react";
import { clsx } from "clsx";
import { isNonNullable } from "../_util/isNonNullable";
import { useComponentConfig } from "../config-provider/context";
import useStyle from "./style/index";
import type { SizeType } from "../config-provider/SizeContext";
import type {
  ButtonColorType,
  ButtonHTMLType,
  ButtonShape,
  ButtonType,
  ButtonVariantType,
} from "./buttonHelpers";

export interface BaseButtonProps {
  type?: ButtonType;
  size?: SizeType;
  variant?: ButtonVariantType;
  children?: React.ReactNode;
  color?: ButtonColorType;
  icon?: React.ReactNode;
  iconPlacement?: "start" | "end";
  shape?: ButtonShape;
  disabled?: boolean;
  loading?: boolean | { delay?: number; icon?: React.ReactNode };
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  [key: `data-${string}`]: string;

  /**
   * @private
   */
  _skipSemantic?: boolean;
}

type ColorVariantPairType = [
  color?: ButtonColorType,
  variant?: ButtonVariantType
];

const ButtonTypeMap: Partial<Record<ButtonType, ColorVariantPairType>> = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  link: ["link" as any, "link"],
  text: ["default", "text"],
};

export interface ButtonProps extends BaseButtonProps {
  href?: string;
  htmlType?: ButtonHTMLType;
  autoInsertSpace?: boolean;
}

const InternalCompoundedButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  //@ts-ignore
  const { children, size: customizeSize, type, variant, color } = props;

  const contentNode = isNonNullable(children) ? children : "";
  const mergedType = type || "default";

  const [parsedColor, parsedVariant] = useMemo<ColorVariantPairType>(() => {
    if (type) {
      const colorVariantPair = ButtonTypeMap[type];
      return colorVariantPair!;
    }

    return ["default", "outlined"];
  }, [color]);

  const [mergedColor, mergedVariant] = useMemo<ColorVariantPairType>(() => {
    return [parsedColor, parsedVariant];
  }, [parsedColor, parsedVariant]);

  const mergedColorText = mergedColor;

  const { getPrefixCls } = useComponentConfig("button");

  const prefixCls = getPrefixCls("btn");

  const [hashId, cssVarCls] = useStyle(prefixCls);

  const classes = clsx(prefixCls, hashId, cssVarCls, {
    [`${prefixCls}-${mergedType}`]: mergedType,
    [`${prefixCls}-color-${mergedColorText}`]: mergedColorText,
    [`${prefixCls}-variant-${mergedVariant}`]: mergedVariant,
  });

  let ButtonNode = (
    <button className={classes} ref={ref as React.Ref<HTMLButtonElement>}>
      {contentNode}
    </button>
  );

  return ButtonNode;
});

const Button = InternalCompoundedButton;

export default Button;
