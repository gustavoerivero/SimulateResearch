type TAction = "info" | "success" | "warning" | "error" | "attention";

export interface IToastProps {
  id?: string;
  title?: string;
  description?: string;
  action?: TAction;
  color?: string;
  bgColor?: string;
};