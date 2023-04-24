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

export interface IPagination {
  current_page:number,
  per_page: number,
  total_count:number,
  total_pages:number,
}
