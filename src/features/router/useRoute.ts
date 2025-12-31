import { useMatches } from "react-router-dom";

export const useRoute = () => {
  const matched = useMatches();
  console.log("matched", matched.at(-1));
};
