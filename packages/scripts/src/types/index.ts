import type { ChangelogOption } from "@soybeanjs/changelog";

export interface CliOption {
  changelogOptions: Partial<ChangelogOption>;

  cleanupDirs: string[];

  cwd: string;

  gitCommitScopes: [string, string][];

  gitCommitTypes: [string, string][];

  ncuCommandArgs: string[];
  author: any;
}
