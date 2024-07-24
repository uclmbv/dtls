import * as _ from "@uclmbv/utls";

import { allInputs } from "./base";
import { isAllInlineTag, isNativeInput } from "./tag";
import { getDeepestBlockElements } from "./get";

function query(el: Element, selector: string) {
  return el.querySelector(selector);
}

function queryAll(el: Element, selector: string) {
  return el.querySelectorAll(selector);
}

function queryAllInputs(holder: Element) {
  return _.toArray(holder.querySelectorAll(allInputs)).reduce(
    (result, input) => {
      if (isAllInlineTag(input) || isNativeInput(input)) {
        return [...result, input];
      }
      return [...result, ...getDeepestBlockElements(input)];
    },
    []
  );
}

export { query, queryAll, queryAllInputs };
