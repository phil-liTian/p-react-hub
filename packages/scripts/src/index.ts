/*
 * @Author: phil
 * @Date: 2025-12-19 14:43:38
 */
import cac from "cac";
import { blue } from "kolorist";

async function setupCli() {
  const cli = cac(blue("phil admin"));

  cli.command("cc", "test").action(() => {
    console.log("Route generation command executed");
  });

  cli.help();
  cli.parse();
}

setupCli();
