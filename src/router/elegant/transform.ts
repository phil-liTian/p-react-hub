/*
 * @Author: phil
 * @Date: 2025-12-19 12:16:05
 */
import { layouts, pages as views } from "./imports";

const loadings = import.meta.glob(`/src/pages/admin/**/loading.tsx`, {
  eager: true,
  import: "default",
});

export function transformElegantRoutesToReactRoutes(routes) {
  return routes.flatMap(transformElegantRoutesToReactRoute);
}

function transformElegantRoutesToReactRoute(route) {
  const { matchedFiles, path, children, name } = route;

  function converConfig(m: any) {
    const { default: Component } = m;
    return {
      Component,
    };
  }

  async function getConfig(index: boolean = false) {
    if (matchedFiles[0] && !index) {
      const config = await layouts[matchedFiles[0]]();

      return converConfig(config);
    }

    let pageName = name;

    if (matchedFiles[1] && (!children?.length || index)) {
      const config = await views[pageName]();
      return converConfig(config);
    }

    return null;
  }

  const reactRoute = {
    children: [],
    path,
    id: name,
    HydrateFallback: matchedFiles[2]
      ? loadings[matchedFiles[2]]
      : loadings["/src/pages/admin/loading.tsx"],
    lazy: async () => {
      return {
        ...(await getConfig()),
      };
    },
  };

  if (children?.length) {
    reactRoute.children = children.flatMap(transformElegantRoutesToReactRoute);
  }

  return reactRoute;
}
