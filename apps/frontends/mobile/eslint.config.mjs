import node from '@my-project/configs/eslint/node.mjs';
import react from '@my-project/configs/eslint/react.mjs';
import typescript from '@my-project/configs/eslint/typescript.mjs';
import jest from '@my-project/configs/eslint/jest.mjs';
import reactTest from '@my-project/configs/eslint/react-test.mjs';
import expo from '@my-project/configs/eslint/expo.mjs';
import detox from '@my-project/configs/eslint/detox.mjs';
import reactNative from '@my-project/configs/eslint/react-native.mjs';

/** @type {import("eslint").Linter.Config[]} */
export default [...node, ...typescript, ...jest, ...react, ...reactNative, ...reactTest, ...detox, ...expo];
