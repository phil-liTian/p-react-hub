/*
 * @Author: phil
 * @Date: 2025-12-19 12:16:05
 */
import { pages as views, layout } from "./imports";

export function transformElegantRoutesToReactRoutes(routes) {
  return routes.flatMap(transformElegantRoutesToReactRoute);
}

function transformElegantRoutesToReactRoute(route) {
  const { matchedFiles, path } = route;

  function converConfig(m: any) {
    const { default: Component } = m;
    return {
      Component,
    };
  }

  async function getConfig(index: boolean = false) {
    if (matchedFiles[0] && !index) {
      const config = await layout[matchedFiles[0]]();
      console.log("config", config);

      return converConfig(config);
    }
    return {};
  }

  const reactRoute = {
    children: [],
    path,

    lazy: async () => {
      return {
        ...(await getConfig()),
      };
    },
  };

  return reactRoute;
}
