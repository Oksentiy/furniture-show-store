import {FC, useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';

import {SingleProductCard} from "components/reusableComponents/singleProductCatd/SingleProductCard";
import {IRootState} from "../types";
import '../styles/productCards.scss'
import {fetchProducts} from "components/pages/catalogPage/model/services/getProductDataFromApi";
import {Dispatch} from "redux";
import axios from "axios";

export const ProductCards: FC = () => {
  const dispatch: Dispatch = useDispatch()
  const data:any = useSelector((data: IRootState) => data.products.items);
  const [productsData, setProducts] = useState([])

  localStorage.setItem('filteredParams', JSON.stringify(productsData));
  const filteredParamsFromLS = localStorage.getItem('filteredParams')
  const [filteredData, setFilteredData] = useState()


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