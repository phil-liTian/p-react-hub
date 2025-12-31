import { useMixMenuContext } from "@/features/menu/menuContext";

export const VerticalMenu = memo(() => {
  const { allMenus } = useMixMenuContext();
  return <AMenu className="size-full" mode="inline" items={allMenus}></AMenu>;
});
