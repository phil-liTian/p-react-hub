import { transformElegantRoutesToReactRoutes } from "../elegant/transform";

export function getReactRoutes(route) {
  return transformElegantRoutesToReactRoutes(route);
}
