import type { RouteObject } from "react-router-dom";

export const getBaseChildrenRoutes = (routes: RouteObject[]) => {
  return routes.filter((v) => v.id === "admin_(base)");
};
