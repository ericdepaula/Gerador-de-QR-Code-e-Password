import chalk from "chalk";

const qrcodePrompt = [
  {
    name: "link",
    description: chalk.green("Digite o link para gerar o QR-Code"),
  },
  {
    name: "type",
    description: chalk.green(
      "Escolha o tipo de QR-Code\n1- Normal | 2 - Terminal "
    ),
    pattern: /^[1-2]$/,
    message: chalk.red("Escolha inválida, selecione 1 ou 2"),
    required: true
  },
];

export default qrcodePrompt;
