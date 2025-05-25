import { cloneElement } from "react";

function DisabledIf({condition, children}) {
  return condition ? cloneElement(children, { disabled: true }) : children;
}

export default DisabledIf