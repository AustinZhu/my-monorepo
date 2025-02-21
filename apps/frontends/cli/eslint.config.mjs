import react from '@my-project/configs/eslint/react.mjs';
import node from '@my-project/configs/eslint/node.mjs';
import typescript from '@my-project/configs/eslint/typescript.mjs';
import vitest from '@my-project/configs/eslint/vitest.mjs';
import reactTest from '@my-project/configs/eslint/react-test.mjs';

/** @type {import("eslint").Linter.Config[]} */
export default [...node, ...typescript, ...vitest, ...react, ...reactTest];
