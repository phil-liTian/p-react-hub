/*
 * @Author: phil
 * @Date: 2025-12-22 14:26:50
 */

import BaseLayout from "./BaseLayout";
import { MenuProvider } from "@/features/menu/index";

const index = () => {
  return (
    <MenuProvider>
      <BaseLayout />
    </MenuProvider>
  );
};

export default index;
