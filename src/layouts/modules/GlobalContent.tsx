import { useOutlet } from "react-router-dom";

export const GlobalContent = () => {
  const currentOutlet = useOutlet();

  return <div>{currentOutlet}</div>;
};
