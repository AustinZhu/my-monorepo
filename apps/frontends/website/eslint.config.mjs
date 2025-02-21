import browser from '@my-project/configs/eslint/browser.mjs';
import typescript from '@my-project/configs/eslint/typescript.mjs';
import vitest from '@my-project/configs/eslint/vitest.mjs';
import astro from '@my-project/configs/eslint/astro.mjs';
import playwright from '@my-project/configs/eslint/playwright.mjs';
import domTest from '@my-project/configs/eslint/dom-test.mjs';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...browser,
  ...typescript,
  ...vitest,
  ...astro,
  ...domTest,
  ...playwright,
  {
    rules: {
      'sonarjs/no-unknown-property': 'off',
    },
  },
];
