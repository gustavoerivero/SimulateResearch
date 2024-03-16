import { ReactNode } from "react";

export interface IContainer {
  statusBarColor?: string;
  hiddenBar?: boolean;
  children?: ReactNode;
};