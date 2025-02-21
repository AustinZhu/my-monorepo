import node from '@my-project/configs/eslint/node.mjs';
import typescript from '@my-project/configs/eslint/typescript.mjs';
import jest from '@my-project/configs/eslint/jest.mjs';
import electron from '@my-project/configs/eslint/electron.mjs';

/** @type {import("eslint").Linter.Config[]} */
export default [...node, ...typescript, ...jest, ...electron];
