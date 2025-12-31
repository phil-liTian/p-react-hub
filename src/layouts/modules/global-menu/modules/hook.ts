export const useGetElementById = (id: string) => {
  const [container, setContainer] = useState<HTMLElement | null>();

  useEffect(() => {
    const element = document.getElementById(id);
    console.log("element", element);
    setContainer(element);
  });

  return container;
};
