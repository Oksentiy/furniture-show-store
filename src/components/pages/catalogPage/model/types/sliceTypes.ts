import {AllProductsData} from "components/pages/catalogPage/types";

export interface ProductsState {
  items: AllProductsData[];
  isLoading: boolean;
  error: string | null;
}