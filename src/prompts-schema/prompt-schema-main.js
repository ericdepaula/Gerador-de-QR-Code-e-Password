import chalk from 'chalk';

const mainPrompt = [
  {
    name: "select",
    description:
      chalk.magenta("Escolha a ferramenta que deseja utilizar\n1- QR-Code | 2 - Senha "),
    pattern: /^[1-2]$/,
    message: chalk.red("Escolha inválida, selecione 1 ou 2"),
    required: true,
  },
];

export default mainPrompt;
