import {FC, useState, useEffect} from "react";
import { useSelector } from 'react-redux';

import {SingleProductCard} from "components/reusableComponents/singleProductCatd/SingleProductCard";
import {IRootState} from "../types";
import '../styles/productCards.scss'

export const ProductCards: FC = () => {
  const [productsData, setProducts] = useState([])
  // const isLoading: boolean = useSelector((data:IRootIsLoading) => data.products.isLoading)
  const data:any = useSelector((data: IRootState) => data.products.items);

  useEffect(() => {
    setProducts(data.products)
  },[data.products])

  return (
    <div className='product-cards-container-grid'>
      {
        productsData.map((data:any, index: number) => (
        <SingleProductCard key={index} {...data} />
      ))}
    </div>
  )

}