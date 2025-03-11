import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createPassword from "./services/password/create.js";
import createQrCode from "./services/qr-code/create.js";

async function main() {
  prompt.get(mainPrompt, async (err, result) => {
    if (result.select == 1) await createQrCode();
    if (result.select == 2) await createPassword();
  });

  prompt.start();
}
main();
