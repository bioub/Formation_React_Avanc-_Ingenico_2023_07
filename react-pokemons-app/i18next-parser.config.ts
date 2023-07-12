// i18next-parser.config.ts (à la racine du projet)
import { UserConfig } from "i18next-parser";

const config: UserConfig = {
  locales: ['en', 'fr'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.{ts,tsx}', '!src/**/*.spec.{ts,tsx}'],
  sort: true,
  verbose: true,
};


export default config;
