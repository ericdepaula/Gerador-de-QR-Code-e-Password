import prompt from "prompt";
import qrcodePrompt from "../../prompts-schema/prompt-qrcode.js";
import handle from "./handler.js";

async function createQrCode() {
  prompt.get(qrcodePrompt, handle);

  prompt.start();
}

export default createQrCode;
