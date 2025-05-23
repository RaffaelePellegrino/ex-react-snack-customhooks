import { useCallback, useState } from "react";

export default function useSwitch(initialValues = false) {
  const [state, setState] = useState(initialValues);
  const toggle = useCallback(() => setState(!state ? true : false));
  return [state, toggle];
}
