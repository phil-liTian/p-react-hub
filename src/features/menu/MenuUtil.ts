import { $t } from "@/locales";
import type { RouteObject } from "react-router-dom";

export function filterRoutesToMenus(routes: RouteObject[]) {
  const menus: App.Global.Menu[] = [];
  for (const route of routes) {
    console.log("route", route);
    if (route.path) {
      const newNode = getGlobalMenuByBaseRoute(route);
      menus.push(newNode);
    } else if (route.children?.length) {
      menus.push(...filterRoutesToMenus(route.children));
    }
  }

  return menus;
}

function getGlobalMenuByBaseRoute(route: RouteObject): App.Global.Menu {
  const { path } = route;
  const { title, i18nKey } = route.handle || {};
  const label = i18nKey ? $t(i18nKey) : title;

  const menu: App.Global.Menu = {
    title,
    key: path || "",
    label,
  };

  return menu;
}
