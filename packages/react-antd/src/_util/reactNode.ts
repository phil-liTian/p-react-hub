/*
 * @Author: phil
 * @Date: 2025-12-08 21:22:13
 */
import React from "react";

import { AnyObject } from "./type";

type RenderProps =
  | AnyObject
  | ((originProps: AnyObject) => AnyObject | undefined);

export const replaceElement = <P>(
  element: React.ReactNode,
  replacement: React.ReactNode,
  props?: RenderProps
) => {
  if (!React.isValidElement<P>(element)) {
    return replacement;
  }

  return React.cloneElement<P>(
    element,
    typeof props === "function" ? props(element.props || {}) : props
  );
};

export function cloneElement<P>(element: React.ReactNode, props?: RenderProps) {
  return replaceElement<P>(element, element, props) as React.ReactElement<P>;
}
