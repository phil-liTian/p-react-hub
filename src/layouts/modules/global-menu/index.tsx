import VerticalMenu from "./modules/Vertical";

interface Props {
  mode: UnionKey.ThemeLayoutMode;
  reverse: boolean;
}

export const GlobalMenu = memo(({ mode }: Props) => {
  if (mode === "vertical") return <VerticalMenu />;

  return <VerticalMenu />;
});
