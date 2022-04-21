import {ReactNode} from "react";

export interface ITitle {
  type: "span" | "p"| "div" | "h1" | "h2" | "h3" | "h4" | "h5",
  children?: ReactNode;
}

export interface ITitleMain extends ITitle {
  type: "h1" | "h2" | "h3" | "h4" | "h5"
}