/*
 * @Author: phil
 * @Date: 2025-12-19 10:47:17
 */
import { RouterProvider as Provider } from "react-router-dom";
import { RouterContext } from "./RouterContext";
import { router } from "./router";

export const RouterProvider = () => {
  return (
    <RouterContext.Provider value={router}>
      <Provider router={router.reactRouter}></Provider>
    </RouterContext.Provider>
  );
};
