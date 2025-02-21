import astro from '@my-project/configs/prettier/astro.mjs';
import tailwind from '@my-project/configs/prettier/tailwind.mjs';

/** @type {import("prettier").Options} */
export default {
  ...astro,
  ...tailwind,
};
