/*
 * @Author: phil
 * @Date: 2025-12-19 11:07:03
 */
// import Home from "@/pages/Home";
// import Tiktok from "@/pages/douyin/home/index";
import { generatedRoutes } from "./elegant/routes";
import { getReactRoutes } from "./routes";
import { baseRoutes } from './base/index.tsx'

function initRoutes() {
  const customeRoutes = getReactRoutes(generatedRoutes);

  const constantRoutes = [ ...baseRoutes, ...customeRoutes];

  // const routes = [
  //   {
  //     path: "/",
  //     // element: <Home />,
  //     lazy: () => ({ Component: Tiktok }),
  //   },
  // ];

  console.log("constantRoutes", constantRoutes);

  return { routes: constantRoutes };
}

export const { routes } = initRoutes();
