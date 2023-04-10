export type Color = {
  name:string,
  hex:string
}

export interface MyComponentProps {
  colors: Color[];
  thickness: string[];
}
// export type Size = {
//   height: string;
//   width: string;
// }
export type FormData = {
  color: string;
  thickness: string;
  height: string;
  width: string;
  count?: string;
};