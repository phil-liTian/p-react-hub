import ElegantReactRouter from "@soybean-react/vite-plugin-react-router";

interface RouteMeta extends Record<string | number, unknown> {}
export function setupElegantRouter() {
  return ElegantReactRouter({
    onRouteMetaGen(routeName) {
      const key = routeName.replace("admin_", "");
      let meta: RouteMeta = {};

      if (routeName.startsWith("admin_") && key) {
        meta = {
          i18nKey: `route.${routeName}`,
          title: key,
        };
      }

      return meta;
    },
  });
}
