/*
 * @Author: phil
 * @Date: 2025-12-19 14:43:38
 */
import cac from "cac";
import { blue } from "kolorist";
import type { Lang } from "./locales/index.ts";
import { gitCommit, gitCommitVerify } from "./commands/git-commit.ts";
import { genChangelog } from "./commands/changelog.ts";
import { loadCliOptions } from "./config/index.ts";

type Command = "changelog" | "git-commit" | "git-commit-verify";
type CommandAction<A extends object> = (args?: A) => Promise<void> | void;

type CommandWithAction<A extends object = object> = Record<
  Command,
  { action: CommandAction<A>; desc: string }
>;

interface CommandArg {
  lang?: Lang;

  total?: boolean;
}

async function setupCli() {
  const cliOptions = await loadCliOptions();
  const cli = cac(blue("phil admin"));

  cli.option("-l, --lang <lang>", "specify language");

  const commands: CommandWithAction<CommandArg> = {
    "git-commit": {
      desc: "自动生成commit信息",
      action: async (args?: CommandArg) => {
        const { lang } = args || {};
        await gitCommit(lang);
      },
    },
    "git-commit-verify": {
      desc: "校验生成的commit信息",
      action: async () => {
        await gitCommitVerify();
      },
    },
    changelog: {
      desc: "生成修改日志",
      action: async (args?) => {
        await genChangelog(cliOptions.changelogOptions, args?.total);
      },
    },
  };

  for (const [cmd, { action, desc }] of Object.entries(commands)) {
    cli.command(cmd, desc).action(action);
  }

  cli.help();
  cli.parse();
}

setupCli();
