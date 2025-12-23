import React from "react";
import type { AdminLayoutProps } from "../../types/index";

const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  Header,
  Sider,
  Footer,
}) => {
  return (
    <section>
      <section>
        <header>{Header}</header>
      </section>
      <aside>{Sider}</aside>

      <main>{children}</main>

      <footer>{Footer}</footer>
    </section>
  );
};

export default AdminLayout;
