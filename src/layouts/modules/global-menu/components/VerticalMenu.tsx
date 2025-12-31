import { useMixMenuContext } from "@/features/menu/menuContext";
import { useRouter } from "@/features/router";

export const VerticalMenu = memo(() => {
  const { allMenus } = useMixMenuContext();
  const { navigate } = useRouter();

  const handleMenuClick = (menuInfo) => {
    navigate(menuInfo.key);
  };

  return (
    <AMenu
      className="size-full"
      mode="inline"
      items={allMenus}
      onSelect={handleMenuClick}
    ></AMenu>
  );
});
