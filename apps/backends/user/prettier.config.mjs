import base from '@my-project/configs/prettier/base.mjs'
import sql from '@my-project/configs/prettier/sql.mjs'

/** @type {import("prettier").Options} */
export default {
  ...base,
  ...sql,
}
