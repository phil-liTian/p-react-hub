import DarkModeContainer from "@ca/DarkModeContainer";
import { GLOBAL_SIDER_MENU_ID } from "@/constant/app";

export const GlobalSider = () => {
  return (
    <DarkModeContainer className="size-full">
      <div className="h-full" id={GLOBAL_SIDER_MENU_ID}></div>
    </DarkModeContainer>
  );
};
