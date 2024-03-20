import { ReactNode } from "react";

export interface IContainer {
  headerTitle?: string;
  headerShown?: boolean;
  statusBarColor?: string;
  statusBarStyle?: "light" | "dark" | "auto";
  hiddenBar?: boolean;
  children?: ReactNode;
};