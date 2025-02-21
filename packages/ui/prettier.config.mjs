import base from '@my-project/configs/prettier/base.mjs';
import tailwind from '@my-project/configs/prettier/tailwind.mjs';

/** @type {import("prettier").Options} */
export default {
  ...base,
  ...tailwind,
};
