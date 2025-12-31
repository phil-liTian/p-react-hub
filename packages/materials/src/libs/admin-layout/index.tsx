import React from "react";
import classNames from "clsx";
import type { AdminLayoutProps } from "../../types/index";
import style from "./index.module.css";
import "./index.module.css";
import { createLayoutCssVars } from "./shared";

const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  Header,
  Sider,
  Footer,
  siderWidth = 220,
}) => {
  const cssVar = createLayoutCssVars({ siderWidth }) as React.CSSProperties;

  const leftGapClass = () => {
    return style["left-gap"];
  };

  const headerLeftGapClass = leftGapClass();

  return (
    <section className="relative h-full" style={cssVar}>
      <section className={classNames("flex flex-col h-full")}>
        <>
          <header
            style={{ display: "block" }}
            className={classNames(
              "absolute top-0 left-0 w-full",
              style["layout-header"],
              headerLeftGapClass
            )}
          >
            {Header}
          </header>

          <div className={classNames(style["layout-header-placement"])}></div>
        </>
        <aside
          className={classNames(
            "absolute h-full left-0 top-0",
            style["layout-sider"]
          )}
        >
          {Sider}
        </aside>

        <main className={classNames("flex flex-col flew-grow", leftGapClass())}>
          {children}
        </main>

        <footer className={classNames("absolute left-0 bottom-0 w-full")}>
          {Footer}
        </footer>
      </section>
    </section>
  );
};

export default AdminLayout;
