import type { FC, PropsWithChildren } from "react";
import { useRoute, useRouter } from "../router";
import { getBaseChildrenRoutes } from "../router/routes";
import { filterRoutesToMenus } from "./MenuUtil";
import { MixMenuContext } from "./menuContext";

export const MenuProvider: FC<PropsWithChildren> = ({ children }) => {
  const route = useRoute();
  const router = useRouter();
  console.log("route", route, router.reactRouter.routes);

  const adminRoutes = router.reactRouter.routes.filter(
    (v) => v.path === "/admin"
  ) as any;

  const menus = useMemo(() => {
    return filterRoutesToMenus(getBaseChildrenRoutes(adminRoutes[0].children));
  }, [adminRoutes[0].children]);

  const mixMenuContext = {
    allMenus: menus,
  };

  return <MixMenuContext value={mixMenuContext}>{children}</MixMenuContext>;
};
