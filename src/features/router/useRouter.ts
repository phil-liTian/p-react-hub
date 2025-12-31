import type { RouterContextType } from "./router";
import { RouterContext } from "./RouterContext";

export const useRouter = (): RouterContextType => {
  const navigator = useContext(RouterContext);

  if (!navigator) {
    throw new Error("RouterContext is not provided");
  }

  return navigator;
};
