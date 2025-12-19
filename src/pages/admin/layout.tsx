import { Outlet } from "react-router-dom";

const RootLayout = () => {
  console.log("location", location);

  return <Outlet />;
};

export default RootLayout;
