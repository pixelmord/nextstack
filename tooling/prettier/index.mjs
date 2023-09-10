import { fileURLToPath } from 'url';

/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig | TailwindConfig } */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  printWidth: 120,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-packagejson'],
  tailwindConfig: fileURLToPath(new URL('../../tooling/tailwind/index.ts', import.meta.url)),
};

export default config;
