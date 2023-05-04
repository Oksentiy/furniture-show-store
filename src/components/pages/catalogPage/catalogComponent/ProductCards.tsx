import {FC, useState, useEffect} from "react";
import { useSelector } from 'react-redux';

import {SingleProductCard} from "components/reusableComponents/singleProductCatd/SingleProductCard";
import {IRootState} from "../types";
import '../styles/productCards.scss'

export const ProductCards: FC = () => {
  const [productsData, setProducts] = useState([])
  const data:any = useSelector((data: IRootState) => data.products.items);

  // localStorage.setItem('filteredProducts', JSON.stringify(productsData));
  // const filteredProductsFromLS = localStorage.getItem('filteredProducts')
  // console.log('filteredProductsFromLS', filteredProductsFromLS)
  // console.log(data)

  useEffect(() => {
    setProducts(data.products)
  },[data.products])

  return (
    <div className='product-cards-container-grid'>
      {
        productsData?.map((data:any, index: number) => (
        <SingleProductCard key={index} {...data} />
      ))}
    </div>
  )

}