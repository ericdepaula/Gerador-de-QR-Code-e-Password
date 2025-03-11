import chalk from "chalk";
import handle from "./handler.js";

async function createPassword() {
  console.log("Creating password...");
  const password = await handle();
  console.log(chalk.green(`Password created: ${password}`));
}

export default createPassword;
