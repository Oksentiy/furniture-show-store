import {SingleProductCard} from "components/pages";
import {useSelector} from "react-redux";
import {IRootState} from "components/pages/catalogPage/types";
import {useEffect, useState} from "react";

import '../styles/recommendedProducts.scss'
export const RecommendedProducts = () => {

  const [productsData, setProducts] = useState([])
  const data:any = useSelector((data: IRootState) => data.products.items);

  useEffect(() => {
    setProducts(data.products.slice(0,4))
  },[data.products])
  console.log(productsData)

  return (
    <div className='recommended-products'>
      { productsData.length &&
        productsData.map((data:any, index: number) => (
          <SingleProductCard key={index} {...data} />
        ))
      }

    </div>
  )
}