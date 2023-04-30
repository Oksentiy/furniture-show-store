import {IProductData} from "components/pages/catalogPage/types";

export interface Company {
  id: number,
  full_name: string,
  description:string,
  manufacturer_company: string,
  brand_history: string,
  geolocation: string,
  schedule: string,
  telephone: string,
  email_publice: string,
  address:string,
  social_media:string,
  photo_company_url:string,
}

// interface CompanyProducts {
//   product_comapny: IProductData[]
// }

export interface CompanyData {
  company: Company,
  product_comapny: IProductData[]
}