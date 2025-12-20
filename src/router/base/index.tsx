/*
 * @Author: phil
 * @Date: 2025-12-20 08:54:16
 */
import Home from "@/pages/Home";
import About from "@/pages/About";
import Admin from "@/pages/admin/index.tsx";

export const baseRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/admin", element: <Admin /> },
];
