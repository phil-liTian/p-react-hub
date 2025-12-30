import {
  generateTotalChangelog,
  generateChangelog,
} from "@soybeanjs/changelog";
import type { ChangelogOption } from "@soybeanjs/changelog";

export function genChangelog(
  options?: Partial<ChangelogOption>,
  total = false
) {
  if (total) {
    return generateTotalChangelog(options);
  } else {
    return generateChangelog(options);
  }
}
