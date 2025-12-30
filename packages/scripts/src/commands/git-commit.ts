/*
 * @Author: phil
 * @Date: 2025-12-19 20:54:35
 */
import path from "path";
import { readFileSync } from "fs";
import { locales } from "../locales/index.ts";
import pkg from "enquirer";
import { cancel, execCommand } from "../shared/index.ts";
import type { Lang } from "../locales/index.ts";
const { prompt } = pkg;
interface PromptObject {
  type: string;
  scope: string;
  description: string;
}

export async function gitCommit(lang: Lang = "zh-cn") {
  const { gitCommitMessages, gitCommitScopes, gitCommitTypes } = locales[lang];

  try {
    const result = await prompt<PromptObject>([
      {
        type: "select",
        name: "type",
        message: gitCommitMessages.types,
        choices: gitCommitTypes.map(([value, label]) => {
          const nameWithSuffix = `${value}:`;

          return {
            name: value,
            message: `${nameWithSuffix.padEnd(12)} ${label}`,
          };
        }),
      },
      {
        type: "select",
        name: "scope",
        message: gitCommitMessages.scopes,
        choices: gitCommitScopes.map(([value, label]) => {
          const nameWithSuffix = `${value}:`;
          return {
            name: value,
            message: `${nameWithSuffix.padEnd(12)} ${label}`,
          };
        }),
      },
      {
        type: "input",
        name: "description",
        message: gitCommitMessages.description,
      },
    ]);

    const breaking = result.description.startsWith("!") ? "!" : "";
    const description = result.description.replace(/^!/, "").trim();
    const commitMsg = `${result.type}(${result.scope})${breaking}: ${description}`;

    await execCommand("git", ["commit", "-m", commitMsg], { stdio: "inherit" });
  } catch (err) {
    cancel();
  }
}

export async function gitCommitVerify(
  lang: Lang = "zh-cn",
  ignores: RegExp[] = []
) {
  const gitPath = await execCommand("git", ["rev-parse", "--show-toplevel"]);

  const gitMsgPath = path.join(gitPath, ".git", "COMMIT_EDITMSG");

  const commitMsg = readFileSync(gitMsgPath, "utf8").trim();

  if (ignores.some((regExp) => regExp.test(commitMsg))) return;

  const REG_EXP =
    /(?<type>[a-z]+)(?:\((?<scope>.+)\))?(?<breaking>!)?: (?<description>.+)/i;

  if (!REG_EXP.test(commitMsg)) {
    const errorMsg = locales[lang].gitCommitVerify;

    throw new Error(errorMsg);
  }
}
