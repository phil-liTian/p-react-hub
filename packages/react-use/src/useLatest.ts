/*
 * @Author: phil
 * @Date: 2025-12-02 20:55:39
 */

import { useRef } from "react";

/**
 * 始终返回最新值的只读 ref。
 * @param value 任意值
 * @returns 只读 ref，其 current 恒为最新传入值
 */
const useLatest = <T>(value: T): { readonly current: T } => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

export default useLatest;
