import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { globalConfig } from "@/config";
import { routes } from "@/router/index";

function createRouterInstance() {
  return globalConfig.routerMode === "history"
    ? createBrowserRouter
    : createHashRouter;
}

function initRouter() {
  const reactCreator = createRouterInstance();

  const reactRouter = reactCreator(routes, {
    basename: import.meta.env.VITE_BASE_URL,
  });

  return {
    reactRouter,
  };
}

const navigator = () => {
  const { reactRouter } = initRouter();

  function navigate(path) {
    reactRouter.navigate(path);
  }

  return {
    reactRouter,
    navigate,
  };
};

export const router = navigator();

export type RouterContextType = Awaited<ReturnType<typeof navigator>>;
