import { callReplace } from "./modules/functions.js";
import { regEx as re } from "./modules/objects.js";
import { inputs } from "./modules/dom-elements.js";

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    const elem = e.currentTarget;
    const parent = elem.parentElement;
    const parentSib = parent.nextElementSibling;
    re[elem.attributes.name.value].test(elem.value)
      ? callReplace(
          elem,
          "invalid-border",
          "valid-border",
          parentSib,
          "invalid-req",
          "valid-req"
        )
      : callReplace(
          elem,
          "valid-border",
          "invalid-border",
          parentSib,
          "valid-req",
          "invalid-req"
        );
  });
});
