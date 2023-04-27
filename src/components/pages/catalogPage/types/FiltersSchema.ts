import {IProductData, IPagination} from "./ProductDataSchema";

export interface IRootState {
  pagination: IPagination,
  products: {
    items: IProductData[];
  },
}

// export interface IRootIsLoading {
//   products: {
//     isLoading: boolean;
//   };
// }
