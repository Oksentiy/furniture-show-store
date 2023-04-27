export type Color = {
  name:string,
  hex:string
}

export interface MyComponentProps {
  price: string | number;
  colors: Color[];
  thickness: string[];
}

// export type FormData = {
//   product_color_id: string;
//   product_thickness_id: string;
//   product_length: string;
//   product_width: string;
//   quantity?: string;
// };
export interface SendFormData {
  card_item: FormData,
}
export type FormData = {
  product_id?: number;
  product_color_id: number;
  product_thickness_id: number;
  product_length: number;
  product_width: number;
  quantity?: number;
};