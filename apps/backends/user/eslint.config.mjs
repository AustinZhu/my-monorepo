import drizzle from '@my-project/configs/eslint/drizzle.mjs';
import typescript from '@my-project/configs/eslint/typescript.mjs';
import vitest from '@my-project/configs/eslint/vitest.mjs';
import node from '@my-project/configs/eslint/node.mjs';

/** @type {import("eslint").Linter.Config[]} */
export default [...node, ...typescript, ...vitest, ...drizzle];
