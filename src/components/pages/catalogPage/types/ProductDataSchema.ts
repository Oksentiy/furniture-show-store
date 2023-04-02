export interface IProductData {
  id: number,
  photo_url?: string,
  name: string,
  description: string,
  price: string | number,
  thickness?: string,
  width?: string,
  color?: string,
}
export interface AllProductsData {
  category: string
  company: string
  id: number
  name: string
  photo_url: string
  price: string
}

export type Pagination = {
  current_page:number,
  per_page: number,
  total_items:number,
  total_pages:number,
}
export interface IDataProducts {
  pagination: Pagination,
  products: IProductData[],
}

type Photo = {
  content_type:string,
  size: number,
  url:string,
}
export interface ProductData {
  id: number,
  photo: Photo,
  name: string,
  description: string,
  price: string | number,
  thickness: string,
  width: string,
  color: string,
}
