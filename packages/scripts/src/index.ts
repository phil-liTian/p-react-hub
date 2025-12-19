/*
 * @Author: phil
 * @Date: 2025-12-19 14:43:38
 */
import cac from "cac";
import { blue } from "kolorist";
import type { Lang } from "./locales/index.ts";
import { gitCommit } from "./commands/git-commit.ts";

type Command = 'git-commit'
type CommandAction<A extends object = object> = (args?: A) => Promise<void> | void

type CommandWithAction<A extends object = object> = Record<Command,  { action: CommandAction<A>; desc:string }>

interface CommandArg {
  lang?: Lang
 }

async function setupCli() {
  const cli = cac(blue("phil admin"));

  const commands: CommandWithAction = {
    'git-commit': {
      desc: 'git commit',
      action: async (args?: CommandArg) => {
        const { lang } = args || {};
        await gitCommit(lang);
        console.log(`Git commit command executed with lang: ${lang}`);
      }
    }
  }

  for(const [cmd, { action, desc }] of Object.entries(commands)) {
    cli.command(cmd, desc).action(action);
  }

  cli.help();
  cli.parse();
}

setupCli();
