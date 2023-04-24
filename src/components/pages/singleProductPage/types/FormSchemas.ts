export type Color = {
  name:string,
  hex:string
}

export interface MyComponentProps {
  price: string | number;
  colors: Color[];
  thickness: string[];
}

export type FormData = {
  color: string;
  thickness: string;
  height: string;
  width: string;
  count?: string;
};