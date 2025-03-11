import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createPassword from "./services/password/create.js";
import createQrCode from "./services/qr-code/create.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, result) => {
    if (result.select == 1) await createQrCode();
    if (result.select == 2) await createPassword();
  });

  prompt.start();
}
main();
