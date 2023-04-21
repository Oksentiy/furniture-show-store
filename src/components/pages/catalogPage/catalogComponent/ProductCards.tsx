import {FC, useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import {ThreeDots } from 'react-loader-spinner'

import {SingleProductCard} from "components/reusableComponents/singleProductCatd/SingleProductCard";
import {IRootIsLoading, IRootState} from "../types";
import '../styles/productCards.scss'

export const ProductCards: FC = () => {
  const [productsData, setProducts] = useState([])
  const isLoading: boolean = useSelector((data:IRootIsLoading) => data.products.isLoading)
  const data:any = useSelector((data: IRootState) => data.products.items);

  useEffect(() => {
    setProducts(data.products)
  },[data.products])

  return (
    <div className='product-cards-container-grid'>
      {
        isLoading ?
        <ThreeDots
          height="50"
          width="50"
          color="#d1c7a3"
        /> :
          productsData.map((data:any, index: number) => (
        <SingleProductCard key={index} {...data} />
      ))}
    </div>
  )

}