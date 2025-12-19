/*
 * @Author: phil
 * @Date: 2025-12-19 13:03:42
 */

export const pages: Record<string, () => Promise<any>> = {};

export const layout: Record<string, () => Promise<any>> = {
  root: () => import("@admin/index"),
};
