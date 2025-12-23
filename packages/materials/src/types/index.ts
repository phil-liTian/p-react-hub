import type React from "react";

export type Slots = {
  children?: React.ReactNode;
  Header?: React.ReactNode;
  Footer?: React.ReactNode;
  Sider?: React.ReactNode;
  Tab?: React.ReactNode;
};

export interface AdminLayoutProps extends Slots {}
