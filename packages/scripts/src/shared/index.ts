/*
 * @Author: phil
 * @Date: 2025-12-19 21:10:02
 */
import type { Options } from "execa";
import { red } from "kolorist";
import pkg from "enquirer";
const { prompt } = pkg;
export const cancel = () => console.log(red("操作已取消."));

export async function execCommand(
  cmd: string,
  args: string[],
  options?: Options
) {
  const { execa } = await import("execa");
  const res = await execa(cmd, args, options);
  return (res?.stdout as string)?.trim() || "";
}
