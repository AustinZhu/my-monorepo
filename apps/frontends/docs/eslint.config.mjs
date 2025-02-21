import react from '@my-project/configs/eslint/react.mjs';
import browser from '@my-project/configs/eslint/browser.mjs';
import typescript from '@my-project/configs/eslint/typescript.mjs';
import docusaurus from '@my-project/configs/eslint/docusaurus.mjs';
import vitest from '@my-project/configs/eslint/vitest.mjs';
import reactTest from '@my-project/configs/eslint/react-test.mjs';

/** @type {import("eslint").Linter.Config[]} */
export default [...browser, ...typescript, ...vitest, ...react, ...reactTest, ...docusaurus];
