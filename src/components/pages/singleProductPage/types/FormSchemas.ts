export type Color = {
  name:string,
  hex:string
}

export interface MyComponentProps {
  companies: string[];
  colors: Color[];
  thickness: string[];
}
export type Size = {
  height: string;
  width: string;
}
export type FormData = {
  store: [];
  color: string[];
  thickness: string;
  size: Size[]
};