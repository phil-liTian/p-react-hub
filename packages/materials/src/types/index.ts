import type React from "react";

export type Slots = {
  children?: React.ReactNode;
  Header?: React.ReactNode;
  Footer?: React.ReactNode;
  Sider?: React.ReactNode;
  Tab?: React.ReactNode;
};

interface AdminLayoutSiderConfig {
  siderWidth?: number;
}

export interface AdminLayoutProps extends Slots, AdminLayoutSiderConfig {}
