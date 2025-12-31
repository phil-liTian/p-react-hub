export interface MixMenuContextProps {
  allMenus: App.Global.Menu[];
}

export const MixMenuContext = createContext<MixMenuContextProps>({
  allMenus: [],
});

export const useMixMenuContext = () => {
  const context = useContext(MixMenuContext);

  if (!context) {
    throw new Error("useMixMenu must be used within a MixMenuContext");
  }

  return context as MixMenuContextProps;
};
