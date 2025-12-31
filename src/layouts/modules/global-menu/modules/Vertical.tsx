import { createPortal } from "react-dom";
import { useGetElementById } from "./hook";
import { GLOBAL_SIDER_MENU_ID } from "@/constant/app";
import { VerticalMenu } from "../components/VerticalMenu";

const Vertical = () => {
  const container = useGetElementById(GLOBAL_SIDER_MENU_ID);
  if (!container) return null;

  return createPortal(<VerticalMenu />, container);
  // const container =
};

export default Vertical;
