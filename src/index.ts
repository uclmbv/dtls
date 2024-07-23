export { make } from "./create";
export { query, queryAll, queryAllInputs } from "./query";
export {
  isAllInlineTag,
  isSingleTag,
  isLineBreakTag,
  isAnchorTag,
  isNativeInput,
  isContentEditable,
} from "./tag";
export { append, prepend, swap } from "./update";
